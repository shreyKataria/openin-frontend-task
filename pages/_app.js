import React from "react";
import Head from "next/head";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps :{session, ...pageProps} }) {
  return (
    <React.Fragment>
      <Head>
        <title>openin-frontend-task</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </React.Fragment>
  );
}

export default MyApp;
