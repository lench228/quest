
import SettingsWrapper from "widgets/settings";

import React from "react";
import {QuestItems} from "entities/quest-items";
import {PrimarySettings} from "widgets/settings/ui";

export const Constructor = () => {
  return (
    <div className={"bg-white dark:bg-background  flex flex-row justify-between py-12 pt-0 h-screen"}>
      <QuestItems/>

    <SettingsWrapper>
      <PrimarySettings/>
    </SettingsWrapper>

    </div>
  );
};
