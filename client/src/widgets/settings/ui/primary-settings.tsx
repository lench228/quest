import InputWrapper from "../../../shared/ui/input/input-wrapper.tsx";
import { PRIMARY_SETTINGS_OPTIONS } from "../model/settings-options.ts";
import BackgroundPick from "../../background-pick/ui/background-pick.tsx";

const PrimarySettings = () => {
  return (
    <div className={"flex-col items-center w-full justify-center"}>
      <InputWrapper
        id={PRIMARY_SETTINGS_OPTIONS.inputs[0].id}
        label={PRIMARY_SETTINGS_OPTIONS.inputs[0].label}
        variant={PRIMARY_SETTINGS_OPTIONS.inputs[0].variant}
        validate={(e: string) =>
          e.length < 5 ? "" : "Название слишком длинное"
        }
      />
      <BackgroundPick />
    </div>
  );
};

export default PrimarySettings;
