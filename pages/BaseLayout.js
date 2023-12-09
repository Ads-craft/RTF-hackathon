import Head from "next/head";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import FootNavbar from "../components/FootNavbar";

const index = ({ children }) => {
  const [isTapped, setIsTapped] = useState(false);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Navbar isTapped={isTapped} setIsTapped={setIsTapped} />
      <div>{children}</div>
      <MobileMenu isTapped={isTapped} />
      <FootNavbar />
    </>
  );
};

export default index;
