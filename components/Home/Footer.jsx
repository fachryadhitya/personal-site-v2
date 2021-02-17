import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
export function Footer() {
  const dataFooter = [
    {
      icon: <FiGithub />,
      link: "https://github.com/fachryadhitya",
    },
    {
      icon: <FiTwitter />,
      link: "https://twitter.com/fachryadhitya",
    },
    {
      icon: <FiLinkedin />,
      link: "https://linkedin.com/in/fachryadhitya",
    },
  ];
  return (
    <div style={{ background: "#f1faee" }} className="py-4 flex justify-center">
      <div className="flex max-w-screen-lg mx-auto">
        {dataFooter.map((i) => (
          <a
            key={i.link}
            target="_blank"
            rel="noreferrer"
            href={i.link}
            className="text-2xl text-red-primary mr-4"
          >
            {i.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
