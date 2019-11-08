import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";

const EventDetails: React.FC = () => (
  <Page>
    <Container>
      <h1>Event Details</h1>

      <h2>Pre-Wedding Meet &amp; Greet</h2>
      <p>
        8:00pm May 22, 2020
        <br />
        Location TBD
      </p>
      <p>
        We know that people will be coming from all around the country and we’re
        so excited to see everybody that we didn’t want to wait until the
        wedding. For anybody that is arriving the day before, we’d love to join
        you for a drink and some bar games. It will be casual and you can feel
        free to drop by whenever.
      </p>

      <h2>Cerimony &amp; Reception</h2>
      <p>
        5ish (TBD) May 23, 2020
        <br />
        Rembrandt Yard
        <br />
        1301 Spruce Street Boulder, CO.
      </p>
      <p>
        The exciting part! We will be marrying, drinking, eating, and dancing
        until the late hours.
      </p>

      <h2>Post-Wedding Brunch</h2>
      <p>
        Morning May 24, 2020
        <br />
        Location TBD
      </p>
      <p>
        You came and joined us, you celebrated with us, now we get to feed you
        one last time and talk a bit more. We’ll be finding a nice place for a
        simple spread. Expect something like bagels and coffee.
      </p>

      <h2>The Not-Affiliated-with-the-Wedding Bolder Boulder 10k</h2>
      <p>
        Early May 25, 2020
        <br />
        Boulder
      </p>
      <p>
        Every Memorial Day, Boulder hosts a fun 10k called the Bolder Boulder.
        It’s huge (>47k participants last year), goofy (slip ‘n slide/walking
        wave, anyone?) and it’s over a mile above sea level. No pressure, no
        requirement, not an official wedding event - just wanted people to know
        about it. Nina and Zack are both planning on running it for fun, so
        people are welcome to join or watch, if they’d like.
      </p>
    </Container>
  </Page>
);

export default EventDetails;
