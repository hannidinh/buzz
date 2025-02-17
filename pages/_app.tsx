import LoginModal from "@/components/modals/LoginModal";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RegisterModal from "@/components/modals/RegisterModal";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  )
}
