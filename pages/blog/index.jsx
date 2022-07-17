import Layout, { siteTitle } from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';

const index = ({ posts }) => {
  return (
    <Layout title="About | Página de inicio" home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Lista de Post</h1>
      {posts.map(({ id, title, body }) => {
        return (
          <div key={id}>
            <Link href={`/blog/${id}`}>
              <a>
                {id} - {title}
              </a>
            </Link>
            <p>{body}</p>
          </div>
        );
      })}
    </Layout>
  );
};
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
export default index;
