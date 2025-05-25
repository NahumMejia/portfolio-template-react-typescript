import { Icon } from "@iconify/react";

export function SocialMedia() {
  const socialMediaInfo = [
    {
      name: "GitHub",
      icon: "akar-icons:github-fill",
      url: "https://github.com/NahumMejia",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: "dashicons:instagram",
      url: "pending",
      hoverColor: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: "uil:linkedin",
      url: "https://linkedin.com/in/nahúm-mejia-doniz-262a042b8",
      hoverColor: "hover:text-blue-500",
    },
  ];

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
