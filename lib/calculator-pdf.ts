import { PDFDocument, rgb, type PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import type { CalculatorReport } from './calculator-report';
import { site } from './site';

/** Vector PDF generated locally in the browser, with embedded Czech-capable type. */
export async function createCalculatorPdf(report: CalculatorReport, assets: { font: Uint8Array; logo: Uint8Array }) {
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  const font = await pdf.embedFont(assets.font, { subset: true });
  const logo = await pdf.embedPng(assets.logo);
  pdf.setTitle(`${report.title} | ${site.name}`); pdf.setAuthor(site.name); pdf.setSubject('Orientační finanční model');
  const navy = rgb(.055, .12, .17), gold = rgb(.55, .40, .19), muted = rgb(.36, .41, .44), pale = rgb(.95, .945, .92), blue = rgb(.31, .49, .60), white = rgb(1,1,1);
  const width = 595.28, height = 841.89, left = 44, content = width - 88;
  let page!: PDFPage;
  let cursor = 0;
  const normalized = (text: string) => text.replace(/[\u2010-\u2015\u2212]/g, '-').replace(/\s+/g, ' ').trim();
  function text(value: string, x: number, y: number, size = 10, color = navy) { page.drawText(normalized(value), { x, y, size, font, color }); }
  function lines(value: string, size: number, maxWidth: number) {
    const out: string[] = []; let line = '';
    for (const word of normalized(value).split(' ')) {
      const next = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(next, size) <= maxWidth) line = next;
      else { if (line) out.push(line); line = ''; for (const char of word) { if (font.widthOfTextAtSize(line + char, size) > maxWidth && line) { out.push(line); line = ''; } line += char; } }
    }
    if (line) out.push(line);
    return out;
  }
  function paragraph(value: string, x: number, y: number, maxWidth: number, size = 10, color = muted) {
    const parts = lines(value,size,maxWidth); parts.forEach((line,i) => text(line,x,y-i*size*1.5,size,color)); return parts.length * size * 1.5;
  }
  function newPage(subtitle: string) {
    page = pdf.addPage([width,height]);
    page.drawRectangle({ x:0,y:height-8,width,height:8,color:navy });
    const dimensions = logo.scaleToFit(27,45);
    page.drawImage(logo,{x:left,y:height-76,width:dimensions.width,height:dimensions.height});
    text(site.name,left+43,height-49,13);
    text('FINANCE S PLÁNEM',left+43,height-68,8,gold);
    text('svoboda-efa.cz',width-128,height-48,9,muted);
    page.drawLine({start:{x:left,y:height-95},end:{x:width-left,y:height-95},color:gold,thickness:.8});
    text(subtitle,left,height-127,Math.min(22,content / Math.max(1,font.widthOfTextAtSize(normalized(subtitle),1))));
    text(`Orientační model • ${report.date}`,left,height-148,8,muted);
    cursor = height-180;
  }
  function ensure(space: number) { if(cursor-space<78) newPage('Výpočet - pokračování'); }
  function heading(value: string) { ensure(34); text(value,left,cursor,10,gold); cursor-=22; }
  function rows(items: {label:string;value:string}[]) {
    for(let i=0;i<items.length;i+=2){
      const pair=items.slice(i,i+2),cell=(content-28)/2;
      const heights=pair.map(item=>lines(item.label,8,cell).length*11+lines(item.value,12,cell).length*17+13);
      const h=Math.max(...heights);ensure(h);
      pair.forEach((item,j)=>{const x=left+j*(cell+28);const used=paragraph(item.label,x,cursor,cell,8,muted);paragraph(item.value,x,cursor-used-5,cell,12,navy)});
      cursor-=h;
    }
    cursor-=6;
  }
  newPage(report.title);
  heading('ZADANÉ HODNOTY');rows(report.inputs);
  ensure(78);
  page.drawRectangle({x:left,y:cursor-62,width:content,height:70,color:navy});
  text(report.primary.label,left+17,cursor-10,9,white);
  const primarySize=Math.min(27,(content-34)/Math.max(1,font.widthOfTextAtSize(normalized(report.primary.value),1)));
  text(report.primary.value,left+17,cursor-43,primarySize,rgb(.89,.77,.54));cursor-=91;
  const chart=report.chart;const pts=chart.points;
  if (chart.kind === 'histogram' && chart.bars?.length) {
    ensure(235); text(chart.title,left,cursor,12); cursor-=28;
    const top=cursor, bottom=top-125, bars=chart.bars, maximum=Math.max(1,...bars.map(b=>b.value));
    const cell=content/bars.length;
    bars.forEach((bar,i)=>{
      const h=bar.value/maximum*110,x=left+i*cell+8;
      page.drawRectangle({x,y:bottom,width:cell-16,height:h,color:i<3?rgb(.70,.39,.34):gold});
      text(`${new Intl.NumberFormat('cs-CZ',{maximumFractionDigits:1}).format(bar.value)} %`,x,bottom+h+7,8);
      paragraph(bar.label,x,bottom-15,cell-10,7);
    });
    text('Roční zhodnocení (% p. a.)',left,bottom-49,8,muted);
    text('Výška sloupců: podíl historických období (%)',left,bottom-64,8,muted);
    cursor=bottom-90;
  } else {
  ensure(220); text(chart.title,left,cursor,12);cursor-=19;
  const chartTop=cursor-5,chartBottom=chartTop-130,x0=left+48,x1=width-left-8;
  const last=pts[pts.length-1];
  const max=Math.max(1,chart.target??0,...pts.flatMap(p=>[p.value,p.own??0]));
  const px=(year:number)=>x0+year/Math.max(1,last.year)*(x1-x0),py=(value:number)=>chartBottom+value/max*130;
  const num=(n:number)=>new Intl.NumberFormat('cs-CZ',{maximumFractionDigits:1}).format(n);
  const compact=(n:number)=>n>=1e6?`${num(n/1e6)} mil.`:n>=1000?`${num(n/1000)} tis.`:num(n);
  text('Kč',x1-12,chartTop+10,7,muted);
  [0,.5,1].forEach(r=>{page.drawLine({start:{x:x0,y:py(max*r)},end:{x:x1,y:py(max*r)},color:rgb(.84,.86,.86),thickness:.5});text(compact(max*r),left,py(max*r)-3,7,muted)});
  const plot=(own:boolean)=>{for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i];page.drawLine({start:{x:px(a.year),y:py(own?a.own??0:a.value)},end:{x:px(b.year),y:py(own?b.own??0:b.value)},color:own?blue:gold,thickness:own?1.2:2,dashArray:own?[3,2]:undefined})}};
  if(chart.secondaryLabel)plot(true);plot(false);
  if(pts.length===1)page.drawCircle({x:px(pts[0].year),y:py(pts[0].value),size:3,color:gold});
  if(chart.target!==undefined){page.drawLine({start:{x:x0,y:py(chart.target)},end:{x:x1,y:py(chart.target)},color:blue,thickness:1,dashArray:[4,3]});}
  text('Dnes',x0,chartBottom-16,8,muted);text(`${num(last.year/2)} let`,(x0+x1)/2-10,chartBottom-16,8,muted);const end=`${num(last.year)} let`;text(end,x1-font.widthOfTextAtSize(end,8),chartBottom-16,8,muted);
  cursor=chartBottom-35;
  text(chart.label,left,cursor,8,gold);
  if(chart.secondaryLabel)text(chart.secondaryLabel,left+270,cursor,8,blue);
  if(chart.target!==undefined)text(`Cílový kapitál: ${new Intl.NumberFormat('cs-CZ',{maximumFractionDigits:0}).format(chart.target)} Kč`,left+235,cursor,8,blue);
  cursor-=27;
  }
  heading('CO VÝPOČET UKAZUJE');rows(report.results);
  // Explanations have their own clean page for the full calculators.
  if(report.comments.length) newPage('Souvislosti vašeho výpočtu');
  if(report.notes.length){heading('JAK ČÍST VÝSLEDEK');for(const note of report.notes){const h=lines(note,10,content).length*15+14;ensure(h);cursor-=paragraph(note,left,cursor,content,10);cursor-=14}}
  for(const comment of report.comments){const h=lines(comment.text,10,content).length*15+45;ensure(h);heading(comment.title);cursor-=paragraph(comment.text,left,cursor,content,10);cursor-=24;}
  if(report.comments.length){ensure(90);page.drawRectangle({x:left,y:cursor-66,width:content,height:82,color:pale});text('Probereme, co výsledek znamená pro vás.',left+16,cursor-5,12);paragraph('Úvodní konzultace je bezplatná. Navážeme na váš výpočet a projdeme vaše cíle i rozpočet.',left+16,cursor-27,content-32,9);}
  const pages=pdf.getPages();
  pages.forEach((p,i)=>{page=p;page.drawLine({start:{x:left,y:57},end:{x:width-left,y:57},color:rgb(.80,.81,.80),thickness:.5});text(`${site.phone}  |  ${site.email}`,left,42,8,muted);text('svoboda-efa.cz • Nezávazná modelová kalkulace',left,28,7,muted);text(`${i+1} / ${pages.length}`,width-left-27,28,8,muted)});
  return pdf.save();
}
