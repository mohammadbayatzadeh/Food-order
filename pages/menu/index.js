import MenuPage from "@/components/templates/MenuPage";
import Head from "next/head";

function Menu({ data }) {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <MenuPage data={data} />;
    </>
  );
}

export default Menu;

export async function getStaticProps() {
  try {
    const res = await fetch(`https://test-server-liard.vercel.app/data`);
    const data = await res.json();
    return {
      props: {
        data,
      },
      revalidate: 10, //second
    };
  } catch (err) {
    return { notFound: true };
  }
}
