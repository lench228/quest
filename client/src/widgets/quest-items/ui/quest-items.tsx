import { useDispatch, useSelector } from "react-redux";
import { addItem, selectItems } from "../model/quest-items.slice.ts";
import QuestItemImage from "../add-picture";
import { Suspense } from "react";
import Preloader from "../../../shared/ui/loading/ui/preloader.tsx";
import styles from "./quest-items.module.css";
import { Button } from "../../../shared/ui/buttons/button/button.tsx";

const QuestItems = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const onAddButtonClick = () => {
    dispatch(addItem(""));
  };

  return (
    <Suspense fallback={<Preloader />}>
      <div className={"flex flex-col items-center gap-4 "}>
        {items ? (
          //@todo DragNDrop
          <ul className={styles.container}>
            {" "}
            {items.map((item, index) => (
              <QuestItemImage
                imageUrl={item.imageUrl}
                order={index + 1}
                total={items.length}
              />
            ))}{" "}
          </ul>
        ) : (
          <QuestItemImage imageUrl={""} order={1} total={1} />
        )}
        <Button onClick={onAddButtonClick}>+</Button>
      </div>
    </Suspense>
  );
};

export { QuestItems };
