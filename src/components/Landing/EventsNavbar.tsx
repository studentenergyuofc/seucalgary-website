import { useState, useEffect } from "react";
import { upcomingEvents } from "@lib/data";

const EventsNavbar: React.FC = () => {
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
    </>
  );
};

export default EventsNavbar;
