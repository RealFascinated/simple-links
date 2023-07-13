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

## Support

If you need any help, you can contact me on my Discord server [here](https://discord.gg/yjj2U3ctEG) or open a issue!

## What if I don't want buttons or icon only links?

Just simply remove it from the config and it will not show anymore

## Showing Discord status

You must be in the [lanyard server](https://discord.gg/UrXF2cfJ7F) for it to work.
