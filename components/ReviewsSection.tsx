import { site } from "@/lib/site";

export default function ReviewsSection() {
  return <section id="recenze" className="section paper-section" aria-labelledby="reviews-heading">
    <div className="container reviews-layout">
      <div>
        <p className="section-label">Recenze klientů</p>
        <h2 id="reviews-heading">Jak se vám se mnou spolupracuje?</h2>
        <p className="section-intro">Za každou spoluprací je osobní zkušenost. Budu rád, když se o tu svou podělíte — pomůžete tím i lidem, kteří svého finančního poradce teprve hledají.</p>
      </div>
      <div className="review-invitation">
        <span className="review-source">Hodnocení na Googlu</span>
        <h3>Vaše zkušenost má své místo.</h3>
        <p>Prostor pro recenze právě otevírám. Pokud jsme spolu řešili vaše finance, napište, co vám spolupráce přinesla nebo co bych mohl zlepšit.</p>
        <a className="btn btn-gold" href={site.googleReview} target="_blank" rel="noopener noreferrer">Napsat recenzi na Googlu <span aria-hidden="true">↗</span></a>
        <p className="review-note">Otevře se Google, kde recenzi odešlete ze svého účtu. Děkuji za upřímnou zpětnou vazbu.</p>
      </div>
    </div>
  </section>;
}
