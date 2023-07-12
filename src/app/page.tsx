import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Config from "../../config.json";

library.add(fab, far, fas); // Loading in the icons from FontAwesome

export default function Home() {
  const {
    background,
    infoCard,
    avatar,
    name,
    links,
    socialLinks,
    options,
    description,
    theme,
  } = Config; // All of the settings pulled from the config file

  // Theme colors to use when using the selected theme
  // all used colors are from TailwindCSS
  const themeColors: {
    [key: string]: {
      background: string;
      textColor: string;
      buttonTextColor: string;
    };
  } = {
    dark: {
      background: "bg-neutral-900",
      textColor: "text-white",
      buttonTextColor: "text-white",
    },
    light: {
      background: "bg-white",
      textColor: "text-black",
      buttonTextColor: "text-white",
    },
  };
  const selectedTheme = themeColors[theme] || themeColors.dark; // The theme to use (fallback of dark)

  return (
    <>
      <main
        className={`flex flex-col items-center justify-center w-screen h-screen bg-neutral-900 ${selectedTheme.textColor}`}
      >
        <div
          className={`absolute inset-0 filter w-screen h-screen ${
            background.blur && "blur-sm"
          }`}
          style={
            background.showBackground
              ? {
                  zIndex: 0,
                  background: background.darken.enabled
                    ? `linear-gradient(rgba(0, 0, 0, ${background.darken.amount}), rgba(0, 0, 0, ${background.darken.amount})),
                    url(${background.backgroundImage})`
                    : `url(${background.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundBlendMode: "multiply",
                }
              : {}
          }
        ></div>
        <div
          className={`${selectedTheme.background} rounded-lg text-center shadow-lg`}
          style={{
            zIndex: 1,
            opacity: infoCard.transparency,
          }}
        >
          <div className="m-5">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={avatar}
                alt="Avatar"
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="mb-3"></div>
              <h1 className="text-4xl font-bold">{name}</h1>
            </div>

            {/* Description of user */}
            <p className="mt-4 text-lg max-w-lg">{description}</p>

            {/* Links (Buttons) */}
            <div className="flex flex-col items-center">
              {links.map((link, index) => {
                const icons: any = link.icon?.split(" ") ?? [];

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-row items-center justify-center mt-4 px-4 w-60 py-2 rounded
                      ${selectedTheme.buttonTextColor} ${link.color.normal} hover:brightness-75 transition gap-2`}
                  >
                    {link.icon && <FontAwesomeIcon icon={icons} />}
                    <p>{link.title}</p>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {socialLinks &&
                socialLinks.map((link, index) => {
                  const icons: any = link.icon?.split(" ") ?? [];

                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:brightness-75 transition`}
                    >
                      {link.icon && <FontAwesomeIcon size="2xl" icon={icons} />}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 right-0 mb-5 mr-5">
          {options.showSourceLink && (
            <a
              href="https://git.fascinated.cc/Fascinated/simple-links"
              target="_blank"
              className="mt-5 text-blue-300"
            >
              Website Source
            </a>
          )}
        </div>
      </main>
    </>
  );
}
