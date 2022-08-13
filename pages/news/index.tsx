import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../api/news';
import styles from '../styles/Home.module.css';

type Props = {
  articles: Article[];
};

const News: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>List of News Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('getServerSideProps');
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/news`);
  const data: Article = await res.json();

  // Pass data to the page via props
  return { props: { articles: data } };
};

export default News;
