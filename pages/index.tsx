import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Carona from '../components/Carona';

const HomePage: React.FC = () => (
  <Page>
    <Container>
      <Carona />
    </Container>
  </Page>
);

export default HomePage;
