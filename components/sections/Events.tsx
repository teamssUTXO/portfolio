import { events, featuredEvents } from "@/data/events";
import { EventFeed } from "../EventList";
import { SectionHeader } from "../SectionHeader";
import { headers } from "@/data/headers";

export function Events() {
  return (
    <section id="events" className="px-4 py-24 sm:px-6 md:py-25">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          title={headers.events.title}
          kicker={headers.events.kicker}
        >
          {headers.events.intro}
        </SectionHeader>

        <EventFeed events={events} featured={featuredEvents} />
      </div>
    </section>
  );
}
