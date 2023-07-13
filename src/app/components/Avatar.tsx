"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useLanyardWS } from "use-lanyard";

import Config from "../../../config.json";

function LanyardWrapper(props: { children: any }) {
  return <Fragment>{props.children}</Fragment>;
}

export default function Avatar(props: any) {
  const { avatar } = props;
  const { discord }: any = Config;

  return (
    <div className="relative inline-block">
      <Image
        src={avatar}
        alt="Avatar"
        width={120}
        height={120}
        className="rounded-full"
      />
      {discord ? (
        <LanyardWrapper>
          <LanyardComponent discord={discord} />
        </LanyardWrapper>
      ) : null}
    </div>
  );
}

function LanyardComponent(props: { discord: any }) {
  const { discord } = props;
  const discordId = discord.id;
  const lanyardData = useLanyardWS(discordId);
  const hasLanyard = lanyardData !== undefined;

  const statusColor = {
    online: "bg-green-400",
    offline: "bg-slate-400",
    dnd: "bg-red-500",
    idle: "bg-orange-400",
  };
  const currentStatus =
    lanyardData !== undefined
      ? statusColor[lanyardData.discord_status]
      : undefined;

  return (
    <div>
      {hasLanyard && (
        <div
          className={`absolute bottom-2 right-2 w-5 h-5 rounded-full transition ${currentStatus}`}
        />
      )}
    </div>
  );
}
