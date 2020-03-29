import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Navigation from "../Navigation";
import Title from "../Title";

import Container from "../Container";
import Carona from '../Carona';

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

class Page extends React.Component<PageProps> {
  state = {
    names: ["Zack", "Nina"]
  };

  componentDidMount() {
    if (window.location.host === 'www.ninaandzack.com') {
      this.setState({ names: ["Nina", "Zack"] });
    }
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
        {/* <main className="zn-page">{children}</main> */}
        <main className="zn-page">
          <Container>
            <Carona names={names} />
          </Container>
        </main>
      </>
    );
  };
};

export default Page;
