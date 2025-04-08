import QuestItems from "../../../entities/quest-items";
import SettingsWrapper from "../../../widgets/settings";
import PrimarySettings from "../../../widgets/settings/ui/primary-settings";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./construcror.module.css";
import React from "react";

export const Constructor = () => {
  return (
    <div className={styles.container}>
      <QuestItems></QuestItems>
      <DndProvider backend={HTML5Backend}>
        <SettingsWrapper>
          <PrimarySettings></PrimarySettings>
        </SettingsWrapper>
      </DndProvider>
    </div>
  );
};
