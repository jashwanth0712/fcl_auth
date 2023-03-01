import Head from "next/head";
import Landing from "../components/Landing";
import Transaction from "../components/Transaction";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flowpay auth</title>
        <meta name="description" content="Flowpay" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Transaction />
        <div className="grid">
          <Landing />
        </div>
      </main>
    </div>
  );
}
