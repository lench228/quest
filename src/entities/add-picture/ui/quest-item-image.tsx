import React, { ChangeEvent, useRef, useState } from "react";
import styles from "./quest-item-image.module.css";
import clsx from "clsx";
import PaginatorSlides from "../../../shared/ui/paginator-slides";
import Upload from "../../../assets/icons/upload";

interface iQuestItemImage {
  imageUrl: string;
  order: number;
  total: number;
}

export const QuestItemImage = ({ imageUrl, order, total }: iQuestItemImage) => {
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
        styles.container,
        previewUrl?.length && styles.image_container,
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
        <img
          className={clsx(styles.image)}
          src={previewUrl}
          alt={"Ваше изображение"}
        />
      ) : (
        <div className="items-center self-center flex flex-col  justify-center h-full">
          <h1
            className={clsx(
              styles.title,
              "text-center text-sm  dark:text-additional",
            )}
          >
            Загрузить
            <br /> изображение
          </h1>
          <Upload />
        </div>
      )}
    </li>
  );
};
