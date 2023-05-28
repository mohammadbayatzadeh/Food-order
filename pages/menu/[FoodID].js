import DetailsPage from "@/components/templates/DetailsPage";

function FoodDetails({ data }) {
  return <DetailsPage {...data} />;
}

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:8000/data`);
  const data = await res.json();
  const foodData = await data.slice(0, 10);
  const paths = await foodData.map((item) => ({
    params: {
      FoodID: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { FoodID },
  } = context;
  const res = await fetch(`http://localhost:8000/data/${FoodID}`);
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
