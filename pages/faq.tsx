import React, { useState, useEffect } from "react";

import Page from "../components/Page";
import Container from "../components/Container";

interface Item {
  question: string;
  answer: string;
}

const faqs: Item[] = [
  {
    question: "What are the most important things for guests to know right now?",
    answer: `<ol>
      <li>We are very excited that you’re on our website and hope to celebrate with you in May!</li>
      <li>Memorial Day Weekend is a fantastically fun weekend in Boulder. The Boulder Creek Festival has been happening annually for 30 years and includes musical shows, carnival rides, art booths, food vendors, a rubber ducky race, and the Bolder Boulder 10k. It draws more than 400k visitors each year. We hope that it will be an enjoyable way to spend time when you’re not with us. It does; however, mean that accommodations are booked early and the entire city sells out of hotel rooms. Please, be mindful of this.</li>
      </ol>`
  },
  {
    question: "What should I wear? Is there a dress code?",
    answer: "The dress code is semi-formal / cocktail attire."
  },
  {
    question: "What will the weather be like this time of year?",
    answer: "It’s Colorado, so it is a bit unpredictable. In May, Boulder has an average high of 72°F and an average low of 44°F. In 2019, it snowed on May 21st. Temperatures tend to drop significantly after the sun sets. We recommend bringing layers."
  },
  {
    question: "Where are the ceremony and the reception taking place?",
    answer: "Both the ceremony and reception will take place at Rembrandt Yard in downtown Boulder (13th and Spruce)."
  },
  {
    question: "Will the ceremony and reception be indoors or outdoors?",
    answer: "Indoors. Please see earlier answer referencing snow in May in Colorado."
  },
  {
    question: "What happens after the ceremony?",
    answer: "After the ceremony, the wedding party will take some time for a few pictures. Guests will proceed downstairs for a cocktail reception with appetizers."
  },
  {
    question: "Does your wedding have a theme?",
    answer: "Most of you probably know that Nina loves a good theme; however, this didn’t seem like the right time for fun costumes. No theme beyond just fun wedding."
  },
  {
    question: "Are there other wedding events I can attend?",
    answer: "Yes! We would love to see you at the Meet and Greet the evening before the wedding or the brunch the morning after."
  },
  {
    question: "What should I do if I can’t make it?",
    answer: "We are disappointed that we won’t see you. Please, let us know by RSVP on this website, so that we can plan accordingly."
  },
  {
    question: "How do I get to the venue / city?",
    answer: "Rembrandt Yard is in downtown Boulder at 1301 Spruce Street. We recommend using public transportation or Lyft/Uber to get to the venue, if staying in the area. If you are coming from out of town and fly into Denver International Airport, the A/A1 bus is easy, affordable, and convenient. It will drop you off in downtown Boulder (about three blocks from the venue)."
  },
  {
    question: "Where should guests park? Is parking free?",
    answer: "Parking can be hard to find in Boulder, especially on a holiday weekend like Memorial Weekend. The parking garage at 11th and Spruce is the closest garage to the venue. Due to Boulder’s relatively small size, Lyft and Uber also work well."
  },
  {
    question: "Are kids welcome?",
    answer: "We adore your children and they are welcome to come; however, we will not be providing childcare and the venue is an art gallery that is not particularly child-friendly. If you choose to bring them, please make sure that it is noted on the RSVP."
  },
  {
    question: "Do you have a hotel block for guests? Where do you recommend I stay?",
    answer: "Boulder has a huge festival the weekend of the wedding. Due to the massive influx of visitors, there are no hotel blocks available in the city. There are many hotels, hostels, and airbnbs in town that allow for easy travel to the venue."
  },
  {
    question: "Are the ceremony and reception location wheelchair accessible?",
    answer: "There is an elevator from the ground floor to both levels of the venue."
  },
  {
    question: "Will food and drinks be served at the reception? What kind of food?",
    answer: "There will be appetizers, a plated meal, dessert bar, and late-night snack. Drinks will be provided. When you RSVP, you will make a meal choice."
  },
  {
    question: "Will there be any vegan / vegetarian / gluten free / special diet options?",
    answer: "Yes, if we know about them ahead of time. Please, be sure to let us know when you RSVP so that we can communicate those requests to our caterer."
  },
  {
    question: "Where are you registered?",
    // TODO: add links!
    answer: "Your presence is our favorite present (Gah, bad pun). That being said, because you asked, we are registered with honeyfund and amazon."
  },
  {
    question: "Can I take and post pictures of the wedding on social media?",
    answer: "You might have noticed that neither of us are very active on social media, so we appreciate this question. We request that our ceremony be a phone-free time so that our photographer can be responsible for capturing those moments and you can experience the moment with us. During the reception, we understand that photos are fun and will be coming up with a cheesy hashtag of some kind before the wedding that will be shared."
  },
  {
    question: "Do I need to do anything special for the high-altitude of Colorado?",
    answer: "High altitude can be a surprise for some people. If you are not acclimated, please be aware that it may result in some nausea, light-headedness, dizziness, headache, or difficulty sleeping. Alcohol and caffeine may impact you more than you might expect. This can best be managed by drinking lots of water and being mindful of your exertion and alcohol consumption."
  },
  {
    question: "What’s next?",
    answer: "Invitations will be mailed sometime around March 2020. By that point, we’ll have even more information and will have a fully-fleshed out website. We will request that RSVPs be completed on this website.",
  },
  {
    question: "I have more questions!",
    answer: `Okay! Please feel free to contact us at <a href="mailto:armstrongstickles@gmail.com">armstrongstickles@gmail.com</a> and we’re happy to try to help answer them.`
  }
];

const FAQ: React.FC = () => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (pos > 0) {
      const $item = document.querySelectorAll<HTMLDivElement>('.faq-item')[pos - 1];
      const top = $item.offsetTop - 80; // TODO: no magic numbers
      window.scrollTo({ behavior: 'smooth', top });
    }
  }, [pos])

  return (
    <Page>
      <Container>
        <h1>Frequently Asked Questions</h1>

        <p>
          {faqs.map((item, index) => (
            <div key={`faq-link-${index}`}>
              <a onClick={() => setPos(index + 1)}>{item.question}</a>
            </div>
          ))}
        </p>

        {faqs.map((item, index) => (
          <div key={`faq-${index}`} className="faq-item">
            <h2>{item.question}</h2>
            <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
          </div>
        ))}
      </Container>
    </Page>
  );
};

export default FAQ;
