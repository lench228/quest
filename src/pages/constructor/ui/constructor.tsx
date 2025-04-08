
import SettingsWrapper from "widgets/settings";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import {QuestItems} from "entities/quest-items";
import {PrimarySettings} from "widgets/settings/ui";

export const Constructor = () => {
  return (
    <div className={"bg-white dark:bg-background  flex flex-col  py-12 pt-0 h-screen"}>
      <QuestItems/>
      <DndProvider backend={HTML5Backend}>
        <SettingsWrapper>
          <PrimarySettings/>
        </SettingsWrapper>
      </DndProvider>
    </div>
  );
};
