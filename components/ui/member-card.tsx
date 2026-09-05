import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { GithubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import type { Member } from "@/lib/data/members";

export function MemberCard({ member }: { member: Member }) {
  return (
    <div className="group flex flex-col gap-3">
      {member.image ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
          <Image
            src={member.image}
            alt={`${member.name} headshot`}
            fill
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
            className="object-cover object-top grayscale-[15%] transition-[filter] duration-300 group-hover:grayscale-0"
          />
        </div>
      ) : (
        <ImagePlaceholder label="Photo" aspect="portrait" className="w-full" />
      )}
      <div className="flex items-baseline justify-between gap-2 border-t border-line pt-2">
        <p className="text-sm font-medium text-heading">{member.name}</p>
        {(member.github || member.linkedin) && (
          <div className="flex items-center gap-2">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on GitHub`}
                className="text-body-light transition-colors hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="text-body-light transition-colors hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
      <p className="font-mono -mt-2 text-xs text-body-light">{member.role}</p>
    </div>
  );
}
