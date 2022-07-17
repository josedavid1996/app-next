import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const miPrimerPost = ({ dta }) => {
  return (
    <>
      <h1>
        {dta.id} - {dta.title}
      </h1>
      <p>{dta.body}</p>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dta = await res.json();
  const paths = dta.map(({ id }) => ({
    params: {
      id: `${id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const dta = await res.json();
  return {
    props: {
      dta,
    },
  };
}
export default miPrimerPost;
