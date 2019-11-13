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
  { title: "Event Details", path: "/event-details", enabled: true },
  { title: "RSVP", path: "/rsvp" },
  { title: "What to Do", path: "/what-to-do" },
  { title: "FAQ", path: "/faq" }
];

class Page extends React.Component<PageProps> {
  state = {
    names: ["Zack", "Nina"]
  };

  componentDidMount() {
    console.log('href', window.location.host);
  }

  render() {
    const { names } = this.state;
    const { children } = this.props;

    return (
      <>
        <Head>
          <title>{names.join(" & ")}</title>
          <link
            href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic|Goudy+Bookletter+1911&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Title names={names} />
        <Navigation pages={pages} />
        <main className="zn-page">{children}</main>
      </>
    );
  };
};

export default Page;
