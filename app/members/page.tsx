import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { MemberCard } from "@/components/ui/member-card";
import { memberGroups } from "@/lib/data/members";

export const metadata: Metadata = {
  title: "Members",
  description: "Meet the students building Cornell WebDev's project teams.",
};

export default function Members() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Members"
        subtitle="The students designing, building, and leading Cornell WebDev."
      />

      <section className="w-full px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {memberGroups.map((group) => (
            <div key={group.group}>
              <Reveal>
                <h2 className="font-serif font-medium text-3xl text-heading">{group.group}</h2>
              </Reveal>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.members.map((member, i) => (
                  <Reveal key={`${group.group}-${i}`} delay={(i % 6) * 0.05}>
                    <MemberCard member={member} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
