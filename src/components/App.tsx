import * as React from "react";

import Navigation from "./Navigation/";
import Container from "./Container";

const App: React.FC = () => {
  // TODO: navigation?
  return (
    <div>
      <Navigation />
      <Container>Page content goes here</Container>
    </div>
  );
};

export default App;
