import Image from "next/image";
import Config from "../../config.json";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen bg-neutral-900 text-white">
			<div
				className={`absolute inset-0 filter ${
					Config.background.blur && "blur-sm"
				} w-screen h-screen`}
				style={
					Config.background.showBackground
						? {
								zIndex: 0,
								background: Config.background.darken.enabled
									? `linear-gradient(rgba(0, 0, 0, ${Config.background.darken.amount}), rgba(0, 0, 0, ${Config.background.darken.amount})), url(${Config.background.backgroundImage})`
									: `url(${Config.background.backgroundImage})`,
								backgroundSize: "cover",
								backgroundBlendMode: "multiply",
						  }
						: {}
				}
			></div>
			<div
				className="bg-neutral-800 rounded-lg text-center shadow-lg"
				style={{
					zIndex: 1,
				}}
			>
				<div className="m-5">
					<div className="flex flex-col items-center justify-center">
						<Image
							src={Config.avatar}
							alt="Avatar"
							width={120}
							height={120}
							className="rounded-full"
						/>
						<div className="mb-3"></div>
						<h1 className="text-4xl font-bold">{Config.name}</h1>
					</div>

					<p className="mt-4 text-lg max-w-lg">{Config.description}</p>

					<div className="flex flex-col items-center">
						{Config.links.map((link, index) => {
							return (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div
										key={index}
										className={`mt-4 px-4 w-60 py-2 rounded ${link.color.normal} hover:${link.color.hover}`}
									>
										{link.title}
									</div>
								</a>
							);
						})}
					</div>

					{Config.options.showSourceLink && (
						<h1 className="mt-5 text-blue-300">
							<a
								href="https://git.fascinated.cc/Fascinated/simple-links"
								target="_blank"
							>
								View the website source here
							</a>
						</h1>
					)}
				</div>
			</div>
		</main>
	);
}
