import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>chantha | {page}</title>
    </Head>
  );
};

export default PageHead;
