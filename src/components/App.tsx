import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Page } from "../types";
import Navigation from "./Navigation/";
import Title from "./Title";
import HomePage from "./Pages/HomePage";
import Story from "./Pages/Story";
import Photos from "./Pages/Photos";
import EventDetails from "./Pages/EventDetails";
import RSVP from "./Pages/RSVP";
import WhatToDo from "./Pages/WhatToDo";
import FAQ from "./Pages/FAQ";

const App: React.FC = () => {
  const pages: Page[] = [
    { title: "Story", path: "/story", component: Story, disabled: true },
    { title: "Photos", path: "/photos", component: Photos, disabled: true },
    {
      title: "Event Details",
      path: "/event-details",
      component: EventDetails,
      disabled: true
    },
    { title: "RSVP", path: "/rsvp", component: RSVP, disabled: true },
    {
      title: "What to Do",
      path: "/what-to-do",
      component: WhatToDo,
      disabled: true
    },
    { title: "FAQ", path: "/faq", component: FAQ, disabled: true }
  ];

  return (
    <BrowserRouter>
      <Title />
      <Navigation pages={pages} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        {pages.map((page, i) => (
          <Route
            key={`page-${i}`}
            path={page.path}
            component={page.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
