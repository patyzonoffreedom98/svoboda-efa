import { consultationQuestions } from "@/lib/site";
export default function ConsultationFaq() {
  return <div className="faq-list">{consultationQuestions.map(({ question, answer }) => <details key={question} className="faq-item"><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}
