import InputWrapper from "../../../shared/ui/input/input-wrapper";
import { PRIMARY_SETTINGS_OPTIONS } from "../model/settings-options";
import BackgroundPick from "../../background-pick/ui/background-pick";

import React from "react";

export const PrimarySettings = () => {
  return (
    <div className={"flex-col items-center"}>
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


