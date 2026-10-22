import { site } from "@/lib/site";
import { googleReviews, reviewSummary } from "@/lib/reviews";
import ReviewAvatar from "@/components/ReviewAvatar";

export default function ReviewsSection() {
  return <section id="recenze" className="section client-reviews" aria-labelledby="reviews-heading">
    <div className="container">
      <div className="reviews-heading-row">
        <div><p className="section-label">Recenze klientů · Google</p>
          <h2 id="reviews-heading">Důvěra, která má své jméno.</h2>
          <p className="section-intro">Jak spolupráci vnímají lidé, kteří mi svěřili své finance? Přečtěte si jejich vlastní slova.</p>
        </div>
        <a className="reviews-score" href={reviewSummary.url} target="_blank" rel="noopener noreferrer" aria-label={`Hodnocení ${reviewSummary.rating} z 5, ${reviewSummary.count} recenze na Googlu`}>
          <span className="reviews-score-number">{reviewSummary.rating.toFixed(1).replace(".", ",")}<small> / 5</small></span>
          <span className="review-stars" aria-hidden="true">★★★★★</span>
          <span>{reviewSummary.count} recenze na Googlu ↗</span>
          <small>Stav k {reviewSummary.checked}</small>
        </a>
      </div>
      <div className="reviews-grid">{googleReviews.map(review => <article className="client-review" key={review.id}>
        <div className="review-person"><ReviewAvatar src={review.avatar} /><div><h3>{review.author}</h3><span className="review-stars" role="img" aria-label={`${review.rating} z 5 hvězdiček`}>{"★".repeat(review.rating)}</span></div></div>
        <blockquote>{review.text}</blockquote>
        <a className="text-link" href={review.url} target="_blank" rel="noopener noreferrer">{review.excerpt ? "Celá recenze na Googlu" : "Recenze na Googlu"} ↗</a>
      </article>)}</div>
      <div className="reviews-footer"><p>Máte vlastní zkušenost se spoluprací? Budu rád, když se o ni podělíte.</p><a className="btn btn-gold" href={site.googleReview} target="_blank" rel="noopener noreferrer">Napsat recenzi na Googlu ↗</a></div>
    </div>
  </section>;
}
