import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Food Order</title>
        <meta
          name="description"
          content="a wibsite to find your favorite recipe"
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
