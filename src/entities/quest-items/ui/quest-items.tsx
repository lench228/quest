import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  selectIsSliderOpen,
  selectItems,
} from "../model";

import { useRef, useEffect, useState } from "react";


import {INITIAL_MARGIN, PANNEL_HEIGHT} from "../const/";
import {QuestItem} from "../../add-picture";
import {Button} from "shared/ui/buttons/button";



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
      className={"flex flex-col items-center  gap-2 mt-2 h-full"}
      ref={containerRef}
      style={{ height: containerHeight }}
    >
      {items ? (
        //@todo DragNDrop, доскролл при добавлении элемента
        <ul className={"list-none overflow-y-auto w-full p-0 m-0 flex flex-col  gap-4 items-center"}>
          {items.map((item, index) => (
            <QuestItem
              key={index}
              imageUrl={item.imageUrl}
              order={index + 1}
              total={items.length}
            />
          ))}
        </ul>
      ) : (
        <QuestItem imageUrl={""} order={1} total={1} />
      )}

      <Button onClick={onAddButtonClick}>+</Button>
    </div>
  );
};

export { QuestItems };
