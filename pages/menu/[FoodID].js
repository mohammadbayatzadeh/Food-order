import DetailsPage from "@/components/templates/DetailsPage";
import Head from "next/head";
import { useRouter } from "next/router";

function FoodDetails({ data }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading ...</h1>;
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content={data.introduction} />
      </Head>
      <DetailsPage {...data} />;
    </>
  );
}

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const foodData = await data.slice(0, 10);
  const paths = await foodData.map((item) => ({
    params: {
      FoodID: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { FoodID },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${FoodID}`);
  const data = await res.json();

  if (!data.name) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 10, //second
  };
}
