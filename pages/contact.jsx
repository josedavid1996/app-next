import React from 'react';
// import Layout from '../components/Layout';
import Layout, { siteTitle } from '../components/Layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

const Contact = ({}) => {
  return (
    <Layout home title="Contact | Página de inicio">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Contact;
