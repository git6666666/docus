import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {Props} from '@theme/BlogListPage';
import styles from './styles.css';

export default function BlogListWithCover(props: Props) {
  const {metadata, items} = props; // items = 当前页的博客列表

  return (
    <Layout title={metadata.blogTitle} description={metadata.blogDescription}>
      <main className="container margin-vert--lg">
        <div className={styles.grid}>
          {items.map(({content: BlogPostContent}) => {
            const {metadata: postMeta} = BlogPostContent;
            const cover = postMeta.frontMatter?.image;

            return (
              <article key={postMeta.permalink} className={styles.card}>
                <Link to={postMeta.permalink} className={styles.cardLink}>
                  {cover && (
                    <img
                      className={styles.cover}
                      src={useBaseUrl(cover)}
                      alt={postMeta.title}
                      loading="lazy"
                    />
                  )}
                  <h2 className={styles.title}>{postMeta.title}</h2>
                </Link>
              </article>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
