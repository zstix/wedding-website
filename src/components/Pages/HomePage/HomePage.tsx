import * as React from "react";

import Container from "../../Container";
import Image from "../../Image";

import image from "../../../assets/images/kissing.jpg";

const HomePage: React.FC = () => (
  <>
    <Image position="full" src={image} />
    <Container className="zn-page">
      <h1>We're Getting Married!</h1>
      <p>
        On May 23, 2020, Zack Stickles and Nina Armstrong will tie the knot in
        Boulder, Colorado.
      </p>
      <p>More details to follow...</p>
    </Container>
  </>
);

export default HomePage;
