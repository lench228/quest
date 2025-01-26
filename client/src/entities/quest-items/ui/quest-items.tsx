import { useDispatch, useSelector } from "react-redux";
import { addItem, selectItems } from "../model/quest-items.slice.ts";
import QuestItemImage from "../../add-picture";
import { Suspense, useRef, useEffect, useState } from "react";
import Preloader from "../../../shared/ui/loading/ui/preloader.tsx";
import { Button } from "../../../shared/ui/buttons/button/button.tsx";
import clsx from "clsx";

const BOTTOM_MARGIN = 320;

const QuestItems = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const onAddButtonClick = () => {
    dispatch(addItem(""));
  };

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.clientHeight;
      setContainerHeight(height - BOTTOM_MARGIN);
    }
  }, [containerRef]);

  return (
    <Suspense fallback={<Preloader />}>
      <div
        className="flex flex-col items-center h-full gap-2 mt-2"
        ref={containerRef}
      >
        {items ? (
          //@todo DragNDrop, доскролл при добавлении элемента
          <ul
            className={clsx(
              "list-none p-0 m-0 flex flex-col gap-4 w-full   overflow-y-auto items-center",
            )}
            style={{ maxHeight: `${containerHeight}px`, flexShrink: 0 }}
          >
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

        <Button
          onClick={onAddButtonClick}
          className="w-12 h-12 bg-[#464670] text-white rounded-full"
        >
          +
        </Button>
      </div>
    </Suspense>
  );
};

export { QuestItems };
