import { Icon } from "@iconify/react";
import { socialMediaInfo } from "@/Data/SocialMedia";

export function SocialMedia() {

  return (
    <section className="flex justify-center md:justify-start gap-6 mt-6 text-white text-2xl">
      {socialMediaInfo.map((info) => (
        <a
          key={info.name}
          href={info.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${info.hoverColor} transition duration-300`}
        >
          <Icon icon={info.icon} />
        </a>
      ))}
    </section>
  );
}
