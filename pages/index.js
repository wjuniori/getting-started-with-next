import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ accounts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/states">
        <a>Visit all States</a>
      </Link>
      <h1>Bank Accounts</h1>
      {accounts.map((account) => (
        <div key={account.id}>
          <p>{account.description}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.sampleapis.com/fakebank/accounts");
  const accounts = await res.json();

  return {
    props: {
      accounts: accounts.slice(0, 10)
    }
  };
}
