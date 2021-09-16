import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface IndexProps {
  title: string;
}

const index: React.FC<IndexProps> = ({title}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" type="text/css" href="/styles.css" />
    </Head>
    <h1>{title}</h1>
    <div className="block blockA"></div>
    <div className="block blockB"></div>
    <div className="block blockC"></div>
    <div className="block blockD"></div>
    <br style={{clear:'both'}} />
    <div className="block blockA dark"></div>
    <div className="block blockB dark"></div>
    <div className="block blockC dark"></div>
    <div className="block blockD dark"></div>
    <br style={{clear:'both'}} />
    <div className="mainBlock">
      <p>Voluptate sit aute id aute exercitation aliqua pariatur commodo aliqua incididunt tempor. Id cillum esse mollit id proident. Ipsum officia officia anim irure et ea aute pariatur eiusmod mollit aliqua. Magna qui sint deserunt id deserunt ullamco magna quis laborum ex sunt sint. Quis ea aliquip consequat do excepteur. Elit magna qui magna nostrud incididunt laboris commodo id ea ullamco reprehenderit quis id.</p>
    </div>
  </React.Fragment>
);

/**
 * This is getServerSideProps to verify that the ENV is working,
 * nota that this functionality (because of the static nature of the data) 
 * will fit better in the getStaticProps paradigm
 */
export const getServerSideProps: GetServerSideProps<IndexProps>  = async () => {
  return {
    props: {
      title: `Hello ${process.env.PROJECT_NAME}!`,
    },
  }
}

export default index;
