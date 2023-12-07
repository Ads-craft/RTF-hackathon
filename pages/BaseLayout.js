import Head from "next/head";
import Navbar from "../components/Navbar";

const index = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default index;
