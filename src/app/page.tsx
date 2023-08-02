import { Config } from "@/src/types/config";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Avatar from "./components/Avatar";

const Config: Config = require("../../config.yml") as any;

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
      backgroundColor: string;
      infoCardColor: string;
      textColor: string;
      buttonTextColor: string;
      footerTextColor: string;
    };
  } = {
    dark: {
      backgroundColor: "bg-neutral-800",
      infoCardColor: "bg-neutral-900",
      textColor: "text-white",
      buttonTextColor: "text-white",
      footerTextColor: "text-blue-300",
    },
    light: {
      backgroundColor: "bg-gray-300",
      infoCardColor: "bg-white",
      textColor: "text-black",
      buttonTextColor: "text-white",
      footerTextColor: "text-black",
    },
  };
  const selectedTheme = themeColors[theme] || themeColors.dark; // The theme to use (fallback of dark)

  return (
    <>
      <main
        className={`flex flex-col items-center justify-center w-screen h-screen ${selectedTheme.backgroundColor} ${selectedTheme.textColor}`}
      >
        {/* Background Image */}
        {background.showBackground && background.backgroundImage && (
          <Image
            alt="Background image"
            src={background.backgroundImage}
            fill={true}
            style={{
              zIndex: 0,
              filter: `${background.blur && "blur(4px)"} brightness(${
                background.darken.enabled && background.darken.amount / 2
              })`,
            }}
          />
        )}

        {/* Info Card */}
        <div
          className={`${
            infoCard.transparency != 0
              ? `${selectedTheme.infoCardColor} shadow-lg rounded-lg`
              : ``
          } text-center`}
          style={{
            zIndex: 1,
            opacity: infoCard.transparency != 0 ? infoCard.transparency : 1,
          }}
        >
          <div className="m-5">
            <div className="flex flex-col items-center justify-center">
              <Avatar avatar={avatar} />
              <div className="mb-3"></div>
              <h1 className="text-4xl font-bold">{name}</h1>
            </div>

            {/* Description of user */}
            <p className="mt-4 text-lg max-w-lg">{description}</p>

            {/* Links (Buttons) */}
            <div className="flex flex-col items-center">
              {links &&
                links.map((link, index) => {
                  const icons: any = link.icon?.split(" ") ?? [];
                  let color: any = link.color;
                  // Here so old configs don't break
                  if (color.normal != undefined) {
                    color = color.normal;
                  } else {
                    color = link.color;
                  }

                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-row items-center justify-center mt-4 px-4 w-60 py-2 rounded
                      ${selectedTheme.buttonTextColor} ${color} hover:brightness-75 transition gap-2 shadow-lg`}
                      style={{
                        opacity:
                          infoCard.transparency != 0
                            ? infoCard.transparency
                            : 0.8,
                      }}
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
                      className="hover:brightness-75 transition shadow-lg"
                      style={{
                        opacity:
                          infoCard.transparency != 0
                            ? infoCard.transparency
                            : 0.8,
                      }}
                    >
                      {link.icon && (
                        <FontAwesomeIcon
                          color={link.color && link.color}
                          size="2xl"
                          icon={icons}
                        />
                      )}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`absolute bottom-0 right-0 mb-5 mr-5 ${selectedTheme.footerTextColor}`}
        >
          {options.showSourceLink && (
            <a
              href="https://git.fascinated.cc/Fascinated/simple-links"
              target="_blank"
              className="mt-5"
            >
              Website Source
            </a>
          )}
        </div>
      </main>
    </>
  );
}
