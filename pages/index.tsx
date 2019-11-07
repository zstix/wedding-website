import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Image from "../components/Image";

const HomePage: React.FC = () => (
  <Page>
    <Image position="full" src="/images/kissing.jpg" />
    <Container className="zn-page">
      <h1>We're Getting Married!</h1>
      <p>
        On May 23, 2020, Zack Stickles and Nina Armstrong will tie the knot in
        Boulder, Colorado.
      </p>
      <p>More details to follow...</p>
    </Container>
  </Page>
);

export default HomePage;
