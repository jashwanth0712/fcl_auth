import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div className="container">
        <h1>About FLOWPAY</h1>
        <p>
          This is a <a href="https://developers.flow.com/fcl">scan and pay </a>cross chain bridge <a href="https://developers.flow.com">Flow</a>.
        </p>
        
        <p>Flow Pay is a cross-chain crypto bridge that allows users to pay to any blockchain through scanning the QR code. Additionally, it also allows users to scan UPI QR codes and pay directly from crypto to INR. This README file aims to provide information about the project and its features.</p>  </div>
    </div>
  )
}

