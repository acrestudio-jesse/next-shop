import mongoose from "mongoose";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/pageStyles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acre Shop</title>
        <meta name="acre illustration studio shop" content="acre shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
