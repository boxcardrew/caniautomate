import { GuideHead } from "./GuideHead";

export default function GuidePost({ children, meta }) {
  return (
    <section>
      <GuideHead meta={meta} />
      <article style={{ color: 'red' }}>{children}</article>
    </section>
  );
}
