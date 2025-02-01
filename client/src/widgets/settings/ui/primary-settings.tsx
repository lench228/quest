import InputWrapper from "../../../shared/ui/input/input-wrapper.tsx";
import { PRIMARY_SETTINGS_OPTIONS } from "../model/settings-options.ts";
import BackgroundPick from "../../background-pick/ui/background-pick.tsx";
import styles from "./settings.module.css";

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
