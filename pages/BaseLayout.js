import Head from "next/head";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import FootNavbar from "../components/FootNavbar";
import { WagmiProvider } from "wagmi";
import { config } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";

const index = ({ children }) => {
  const [isTapped, setIsTapped] = useState(false);
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
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
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default index;
