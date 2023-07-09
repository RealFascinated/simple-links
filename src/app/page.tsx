import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Config from "../../config.json";

library.add(fab, far, fas); // Loading in the icons from FontAwesome

export default function Home() {
	const { background, infoCard, avatar, name, links, options, description } =
		Config; // All of the settings pulled from the config file

	return (
		<>
			<main className="flex flex-col items-center justify-center w-screen h-screen bg-neutral-900 text-white">
				<div
					className={`absolute inset-0 filter ${
						background.blur && "blur-sm"
					} w-screen h-screen`}
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
					className={`bg-neutral-800 rounded-lg text-center shadow-lg`}
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

						<p className="mt-4 text-lg max-w-lg">{description}</p>

						<div className="flex flex-col items-center">
							{links.map((link, index) => {
								const icons: any = link.icon?.split(" ");

								return (
									<a
										key={index}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div
											key={index}
											className={`flex flex-row items-center justify-center mt-4 px-4 w-60 py-2 rounded ${link.color.normal} hover:brightness-75 transition`}
										>
											{link.icon && (
												<>
													<FontAwesomeIcon icon={icons} />
													<div className="ml-2"></div>
												</>
											)}
											<p>{link.title}</p>
										</div>
									</a>
								);
							})}
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 right-0 mb-5 mr-5">
					{options.showSourceLink && (
						<h1 className="mt-5 text-blue-300">
							<a
								href="https://git.fascinated.cc/Fascinated/simple-links"
								target="_blank"
							>
								Website Source
							</a>
						</h1>
					)}
				</div>
			</main>
		</>
	);
}
