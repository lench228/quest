import React from "react";
import InputLabel from "../../../shared/ui/input-label/ui/input-label";
import { BACKGROUND_PICK } from "../model/background-pick";

import {BackgroundPickElements} from "./background-pick-elements";

const BackgroundPick = () => {
  document.querySelector("main");
  return (
    <div className={"max-w-[400px]"}>
      <InputLabel label={BACKGROUND_PICK.LABEL} error={""} />
        <BackgroundPickElements/>
    </div>
  );
};

export default BackgroundPick;
