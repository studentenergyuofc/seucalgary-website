import { NewsItemProps } from "@interfaces/NewsItems";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import { achievementsEvents, upcomingEvents, pastEvents } from "@lib/data";
import "./Events.css";

const Events: React.FC = () => {
  const [event, setEvent] = useState<string>();

  useEffect(() => {
    if (upcomingEvents.length < 1) {
      setEvent("past");
    } else {
      setEvent("upcoming");
    }
  }, []);

  return (
    <>
      <div className="events-navbar">
        <ul className="events-list">
          {upcomingEvents.length > 0 && (
            <li>
              <button
                className={
                  event === "upcoming"
                    ? "events-button active"
                    : "events-button"
                }
                onClick={() => setEvent("upcoming")}
              >
                Upcoming Events
              </button>
            </li>
          )}
          <li>
            <button
              className={
                event === "past" ? "events-button active" : "events-button"
              }
              onClick={() => setEvent("past")}
            >
              Recent Events
            </button>
          </li>
          <li>
            <button
              className={
                event === "achievements"
                  ? "events-button active"
                  : "events-button"
              }
              onClick={() => setEvent("achievements")}
            >
              Advocacy
            </button>
          </li>
        </ul>
      </div>
      <div className="event-container">
        {event === "upcoming" ? (
          <article className="event-article" data-aos>
            {upcomingEvents.map((event: NewsItemProps) => {
              return (
                <div
                  className="event-holder"
                  data-aos={event.animation}
                  data-aos-anchor-placement="center-bottom"
                  key={event.title}
                >
                  <NewsItem
                    type="upcoming"
                    path={event.path}
                    blurhash={event.blurhash}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    animation={event.animation}
                    link={event.link ? event.link : undefined}
                  />
                </div>
              );
            })}
          </article>
        ) : event === "past" ? (
          <article className="event-article">
            {pastEvents.map((event: NewsItemProps) => {
              return (
                <div
                  className="event-holder"
                  data-aos={event.animation}
                  data-aos-anchor-placement="center-bottom"
                  key={event.title}
                >
                  <NewsItem
                    type="past"
                    path={event.path}
                    blurhash={event.blurhash}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    animation={event.animation}
                    link={event.link ? event.link : undefined}
                  />
                </div>
              );
            })}
          </article>
        ) : (
          <article className="event-article">
            {achievementsEvents.map((event: NewsItemProps) => {
              return (
                <div
                  className="event-holder"
                  data-aos={event.animation}
                  data-aos-anchor-placement="center-bottom"
                  key={event.title}
                >
                  <NewsItem
                    type="achievements"
                    path={event.path}
                    blurhash={event.blurhash}
                    title={event.title}
                    description={event.description}
                    date={""}
                    animation={event.animation}
                    link={event.link ? event.link : undefined}
                  />
                </div>
              );
            })}
          </article>
        )}
      </div>
    </>
  );
};

export default Events;
