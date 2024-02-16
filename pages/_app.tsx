import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../components/Navbar";
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Navbars />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
