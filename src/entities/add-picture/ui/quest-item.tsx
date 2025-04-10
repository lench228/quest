import React, { ChangeEvent, useRef, useState } from "react";

import clsx from "clsx";
import PaginatorSlides from "../../../shared/ui/paginator-slides";

import {QuestItemImage} from "./quest-item-image";
import {QuestItemSkeleton} from "./quest-item-skeleton";
import { motion } from "motion/react";
import {useDispatch} from "react-redux";
import {addImage, removeItem} from "entities/quest-items";

interface iQuestItemImage {
  imageUrl: string;
  order: number;
  total: number;
}

export const QuestItem = ({ imageUrl, order, total }: iQuestItemImage) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(imageUrl);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleInputClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        dispatch(addImage({previewUrl: reader.result as string, order: order}))
      };
      reader.readAsDataURL(file);

    }
  };

    return (
        <motion.li
            initial={"offscreen"}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 0.5,
            }}
            whileInView={"onScreen"}
            className={clsx(
                "w-full max-w-[80%] flex flex-col items-center justify-center rounded-xl  relative dark:bg-dim bg-main cursor-pointer"
            )}

            onClick={() => {
              if (inputRef.current) {
                inputRef.current.click();
              }
            }}
        >
          <PaginatorSlides order={order} total={total}/>
          <motion.svg
              onClick={() =>  dispatch(removeItem(order))}
              className="absolute top-2 right-2 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={"#fff"}
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 }
              }}
          >
            <motion.g
                clipPath="url(#clip0_403_3664)"
                fill={"#fff"}
                whileHover={{
                  fill: "#000",
                  transition: {
                    duration: 0.1,
                    ease: "easeInOut"
                  }
                }}
            >
              <path
                  d="M22.0002 4H17.0002V2C17.0002 1.46957 16.7894 0.960859 16.4144 0.585786C16.0393 0.210714 15.5306 0 15.0002 0L9.00015 0C8.46972 0 7.96101 0.210714 7.58594 0.585786C7.21087 0.960859 7.00015 1.46957 7.00015 2V4H2.00015V6H4.00015V21C4.00015 21.7956 4.31622 22.5587 4.87883 23.1213C5.44144 23.6839 6.2045 24 7.00015 24H17.0002C17.7958 24 18.5589 23.6839 19.1215 23.1213C19.6841 22.5587 20.0002 21.7956 20.0002 21V6H22.0002V4ZM9.00015 2H15.0002V4H9.00015V2ZM18.0002 21C18.0002 21.2652 17.8948 21.5196 17.7073 21.7071C17.5197 21.8946 17.2654 22 17.0002 22H7.00015C6.73494 22 6.48058 21.8946 6.29305 21.7071C6.10551 21.5196 6.00015 21.2652 6.00015 21V6H18.0002V21Z"
              />

              <path d="M11 9.99939H9V17.9994H11V9.99939Z" />
              <path d="M15.0003 9.99939H13.0003V17.9994H15.0003V9.99939Z" />
            </motion.g>

            <defs>
              <clipPath id="clip0_403_3664">
                <rect width="24" height="24" fill="#fff"/>
              </clipPath>
            </defs>
          </motion.svg>
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
                  <QuestItemImage previewUrl={previewUrl}/>
              ) : (
                  <QuestItemSkeleton/>
              )}
        </motion.li>
);
};


