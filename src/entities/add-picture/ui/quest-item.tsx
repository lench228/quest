import React, { ChangeEvent, useRef, useState } from "react";

import clsx from "clsx";
import PaginatorSlides from "../../../shared/ui/paginator-slides";

import {QuestItemImage} from "./quest-item-image";
import {QuestItemSkeleton} from "./quest-item-skeleton";

interface iQuestItemImage {
  imageUrl: string;
  order: number;
  total: number;
}

export const QuestItem = ({ imageUrl, order, total }: iQuestItemImage) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(imageUrl);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <li
      className={clsx(
        "w-full min-h-[300px] max-w-[300px] flex flex-col items-center justify-center rounded-xl  relative dark:bg-dim bg-main cursor-pointer",
        previewUrl?.length && "w-fit h-fit",
      )}
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.click();
        }
      }}
    >
      <PaginatorSlides order={order} total={total} />
      <input
        type="file"
        id="pic"
        name="pic"
        accept="image/png, image/jpeg"
        onChange={handleInputClick}
        hidden={true}
        ref={inputRef}
      />

      {previewUrl ? (
        <QuestItemImage previewUrl={previewUrl} />
      ) : (
        <QuestItemSkeleton/>
      )}
    </li>
  );
};
