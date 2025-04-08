import InputWrapper from "../../../shared/ui/input/input-wrapper";
import { PRIMARY_SETTINGS_OPTIONS } from "../model/settings-options";
import BackgroundPick from "../../background-pick/ui/background-pick";
import styles from "./settings.module.css";
import React from "react";

const PrimarySettings = () => {
  return (
    <div className={styles.primary}>
      <InputWrapper
        id={PRIMARY_SETTINGS_OPTIONS.inputs[0].id}
        label={PRIMARY_SETTINGS_OPTIONS.inputs[0].label}
        variant={PRIMARY_SETTINGS_OPTIONS.inputs[0].variant}
        validate={PRIMARY_SETTINGS_OPTIONS.inputs[0].validate}
      />
      <BackgroundPick />
    </div>
  );
};

export default PrimarySettings;
