# Simple Links

Simple Links is a lightweight alternative to Linktree and others.

## Features

- Simple and lightweight
- Easy to use
- Customizable
- Open source

## Preview

![Preview](/media/preview.png)

## How to install Simple Links

1. Ensure you have Docker and Docker Compose installed.
2. Copy the `docker-compose.yml` and `config.json` to the folder where you want to run the application.
3. Edit the `config.json` to have your settings in it.
4. Run `docker compose up` to see if the application starts.
5. Visit http://server_ip:3000
6. To make the application run in the background use `docker compose up -d`

## How to update Simple Links

1. Go to where Simple Links is installed
2. Run `docker compose pull`
3. Run `docker compose up -d`
4. The application is now updated

## Config Example

```json
{
	"name": "Your Name", // The name you want to display on the site
	"description": "A description about yourself", // The description you want to use
	"avatar": "https://cdn.fascinated.cc/KWprz2.jpg", // The avatar that is shown at the top of the site
	"background": {
		// If you want to use a custom (not dark) background
		"showBackground": true, // Whether it is enabled or not
		"blur": true, // Should we blur the background?
		"darken": {
			// Should we darken the background?
			"enabled": true,
			"amount": 0.7
		},
		"backgroundImage": "https://cdn.fascinated.cc/8twdW8.jpg" // The image to use in the background
	},
	"infoCard": {
		// The card that displays your info and buttons
		"transparency": 0.85 // How transparent should it be?
	},
	"options": {
		// Website options
		"showSourceLink": true // Should we show the "Source Code" link
	},
	"metadata": {
		// Search engine and embedding metadata (discord, twitter, etc embeds)
		"title": "Your Name", // The title of the embed
		"description": "website description", // The description of the embed
		"themeColor": "#6441a5", // The color of the embed
		"authors": [
			// SEO metadata
			{
				"name": "Fascinated",
				"url": "https://fascinated.cc"
			}
		]
	},
	"links": [
		// The buttons to show links for
		{
			"title": "Git", // The shown title of the button
			"url": "https://git.fascinated.cc", // Where the button goes to when clicked
			"icon": "fab fa-github", // The icon of the button (can be removed to show no icon)
			"color": {
				// The color of the icon (tailwindcss colors)
				"normal": "bg-green-700"
			}
		},
		{
			"title": "Twitch",
			"url": "https://twitch.tv/fascinated_",
			"icon": "fab fa-twitch",
			"color": {
				"normal": "bg-[#6441a5]"
			}
		},
		{
			"title": "Documentation",
			"url": "https://docs.fascinated.cc",
			"color": {
				"normal": "bg-neutral-700"
			}
		}
	]
}
```
