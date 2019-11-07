import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Navigation from "../Navigation";
import Title from "../Title";

import { Link } from "../../types";

interface PageProps {
  children: React.ReactNode;
}

const pages: Link[] = [
  { title: "Story", path: "/story" },
  { title: "Photos", path: "/photos" },
  { title: "Event Details", path: "/event-details" },
  { title: "RSVP", path: "/rsvp" },
  { title: "What to Do", path: "/what-to-do" },
  { title: "FAQ", path: "/faq" }
];

const Page: NextPage<PageProps> = ({ children }) => (
  <>
    <Head>
      {/* TODO: update these based on domain */}
      <title>Zack & Nina</title>
      <link
        href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic|Goudy+Bookletter+1911&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Title />
    {/* <Navigation pages={pages} /> */}
    <main className="zn-page">{children}</main>
  </>
);

export default Page;
