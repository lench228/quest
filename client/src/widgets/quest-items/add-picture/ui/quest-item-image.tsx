import Upload from "../../../../assets/icons/upload.tsx";
import { ChangeEvent, useRef, useState } from "react";

import styles from "./quest-item-image.module.css";
import clsx from "clsx";

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
      className={clsx(styles.container)}
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.click();
        }
      }}
    >
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
          className={styles.image}
          src={previewUrl}
          alt={"Ваше изображение"}
        />
      ) : (
        <>
          {" "}
          <h1 className={styles.title}>
            Загрузить
            <br /> изображение
          </h1>
          <Upload />
        </>
      )}
      <p className={"absolute right-0 p-1 font-medium dark:text-additional"}>
        {order}/{total}
      </p>
    </li>
  );
};
