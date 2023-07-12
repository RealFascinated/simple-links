"use client";

import Image from "next/image";
import { useLanyardWS } from "use-lanyard";

import Config from "../../../config.json";

export default function Avatar(props: any) {
  const { avatar } = props;

  const discordId: any = Config.discord.id;
  const lanyardData = useLanyardWS(discordId);
  const hasLanyard = lanyardData != undefined;

  const statusColor = {
    online: "bg-green-400",
    offline: "bg-slate-400",
    dnd: "bg-red-500",
    idle: "bg-orange-400",
  };
  const currentStatus =
    lanyardData != undefined
      ? statusColor[lanyardData.discord_status]
      : undefined;

  return (
    <div className="relative inline-block">
      <Image
        src={avatar}
        alt="Avatar"
        width={120}
        height={120}
        className="rounded-full"
      />
      {hasLanyard && (
        <div
          className={`absolute bottom-2 right-2 w-4 h-4 rounded-full transition ${currentStatus}`}
        />
      )}
    </div>
  );
}
