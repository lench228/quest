import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  selectIsSliderOpen,
  selectItems,
} from "../model/quest-items.slice.ts";
import QuestItemImage from "../../add-picture";
import { useRef, useEffect, useState } from "react";

import { Button } from "../../../shared/ui/buttons/button/button.tsx";
import clsx from "clsx";

import styles from "./quest-items.module.css";

import { INITIAL_MARGIN, PANNEL_HEIGHT } from "../const/const.ts";

const QuestItems = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const isSliderOpen = useSelector(selectIsSliderOpen);

  const containerRef = useRef<HTMLDivElement>(null);

  const initialContentHeight = window.innerHeight - INITIAL_MARGIN;

  const [containerHeight, setContainerHeight] = useState(initialContentHeight);

  const onAddButtonClick = () => {
    dispatch(addItem(""));
  };

  useEffect(() => {
    if (isSliderOpen) setContainerHeight(containerHeight - PANNEL_HEIGHT);
    else setContainerHeight(initialContentHeight);
  }, [isSliderOpen]);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ height: containerHeight }}
    >
      {items ? (
        //@todo DragNDrop, доскролл при добавлении элемента
        <ul className={clsx(styles.items)}>
          {items.map((item, index) => (
            <QuestItemImage
              key={index}
              imageUrl={item.imageUrl}
              order={index + 1}
              total={items.length}
            />
          ))}
        </ul>
      ) : (
        <QuestItemImage imageUrl={""} order={1} total={1} />
      )}

      <Button onClick={onAddButtonClick}>+</Button>
    </div>
  );
};

export { QuestItems };
