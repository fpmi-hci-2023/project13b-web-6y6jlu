"use client";

import { FC } from "react";
import style from "./ProfileSection.module.css";
import classNames from "classnames";
import { Poppins } from "@/fonts";
import Image from "next/image";

export interface ProfileSectionProps {
  name: string;
  avatarUrl?: string;
}

export const ProfileSection: FC<ProfileSectionProps> = ({
  name,
  avatarUrl,
}) => {
  return (
    <section className={style.section}>
      <div className={style.avatarWrapper}>
        {avatarUrl && (
          <Image className={style.avatar} src={avatarUrl} alt="avatar" fill />
        )}
      </div>

      <h3 className={classNames(style.title, Poppins.className)}>{name}</h3>
    </section>
  );
};
