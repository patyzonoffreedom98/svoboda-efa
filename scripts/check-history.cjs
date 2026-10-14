const fs=require('fs'),path=require('path'),ts=require('typescript'),assert=require('node:assert/strict'),Module=require('module');
const root=path.resolve(__dirname,'..'); const resolve=Module._resolveFilename;
Module._resolveFilename=function(file,...args){return resolve.call(this,file.startsWith('@/')?path.join(root,file.slice(2)):file,...args)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true,jsx:ts.JsxEmit.ReactJSX}}).outputText,f);
const h=require('../lib/historical-returns');
assert.equal(h.returns.length,1829);
h.dates.forEach((d,i)=>{if(i){const [y,m]=d.split('-').map(Number),[py,pm]=h.dates[i-1].split('-').map(Number);assert.equal(y*12+m,py*12+pm+1)}});
for(const mode of ['lump','monthly']){
 const zero=h.historicalWindows(Array(48).fill(0),2,mode);assert.equal(zero.length,25);assert(zero.every(x=>Math.abs(x.rate)<1e-9));assert.equal(h.lossShare(Array(48).fill(0),2,mode,0),0);
 const constant=h.historicalWindows(Array(48).fill(.01),2,mode);assert(constant.every(x=>Math.abs(x.rate-(1.01**12-1))<1e-9));
 assert.equal(h.lossShare(Array(48).fill(-.01),2,mode,0),100);
 assert.equal(h.lossShare(Array(48).fill(0),2,mode,1),100);
}
assert.equal(h.bandIndex(0),3);assert.equal(h.bandIndex(.05),4);assert.equal(h.bandIndex(-.1),1);
for(const y of [1,5,11,15,16,30]){for(const mode of ['lump','monthly']){const t=Date.now(),o=h.historicalWindows(h.returns,y,mode);assert.equal(o.length,1830-y*12);assert(o.every(x=>Number.isFinite(x.rate)&&x.value>0));console.log(y,mode,'loss',h.lossShare(h.returns,y,mode,0).toFixed(2),'ms',Date.now()-t)}}
console.log('Historical-return checks passed');
