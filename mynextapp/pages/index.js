import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Check our <Link href="/posts">Posts</Link> page
        </h1>
        {/* <div>
          Browse through our{" "}
          <Link
            href="/posts"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Posts
          </Link>
          !!!!
        </div> */}
      </main>
    </div>
  );
}
