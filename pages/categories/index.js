import CategoriesPage from "@/components/templates/CategoriesPage";
import Head from "next/head";
import React from "react";

function Categoreis({ data }) {
  return (
    <>
      <Head>
        <title>category</title>
      </Head>
      <CategoriesPage data={data} />;
    </>
  );
}

export default Categoreis;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const timeDetail = cookingTime.split(" ")[0];
      if (time === "less30" && timeDetail && +timeDetail < 30) {
        return detail;
      } else if (time === "more30" && timeDetail && +timeDetail > 30) {
        return detail;
      }
    });

    if (difficulty && time && difficultyResult.length && timeResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (!difficulty && time && timeResult.length) {
      return item;
    }
  });

  return {
    props: {
      data: filteredData,
    },
  };
}
