import QuestItems from "../../../entities/quest-items";

export const Constructor = () => {
  return (
    <div className={"bg-white dark:bg-background flex flex-col h-full py-12"}>
      <QuestItems></QuestItems>
    </div>
  );
};
