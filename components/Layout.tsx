import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover overflow-y-hidden">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="DaoTea.ro - probabil cel mai aprecial magazin online de Yerba Mate din Romania"
      />
      <meta property="og:title" content={`${title} | by SeaCoders.com`} />
      <meta
        property="og:description"
        content="DaoTea.ro - probabil cel mai aprecial magazin online de Yerba Mate din Romania"
      />
      <meta property="og:url" content="https://daotea.ro/" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    {children}
  </div>
);

export default Layout;
