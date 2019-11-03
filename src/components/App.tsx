import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Page } from "../types";
import Navigation from "./Navigation/";
import HomePage from "./Pages/HomePage";
import Story from "./Pages/Story";
import Photos from "./Pages/Photos";
import EventDetails from "./Pages/EventDetails";
import RSVP from "./Pages/RSVP";
import WhatToDo from "./Pages/WhatToDo";
import FAQ from "./Pages/FAQ";

const App: React.FC = () => {
  const pages: Page[] = [
    { title: "Story", path: "/story", component: Story },
    { title: "Photos", path: "/photos", component: Photos },
    { title: "Event Details", path: "/event-details", component: EventDetails },
    { title: "RSVP", path: "/rsvp", component: RSVP },
    { title: "What to Do", path: "/what-to-do", component: WhatToDo },
    { title: "FAQ", path: "/faq", component: FAQ }
  ];

  return (
    <BrowserRouter>
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
