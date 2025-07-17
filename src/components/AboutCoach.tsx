"use client";

import CoachOverview from "./CoachOverview";

export default function AboutCoach() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <CoachOverview />
      </div>
    </section>
  );
}
