import Link from 'next/link';
import { GuideHead } from './GuideHead';

export const Post = ({ post }) => {
  const {link, module: {meta}} = post

  return  (
    <article>
      <GuideHead meta={meta} />
      <Link href={'guides/' + link}>
        <a>Read More</a>
      </Link>
    </article>
  )
}