import { TInputVariant } from "shared/types";

export const PRIMARY_SETTINGS_OPTIONS = {
  title: "Начальная настройка",
  inputs: [
    {
      id: "title",
      label: "Название",
      variant: "text" as TInputVariant,
      validate: (e: string) => (e.length < 5 ? "" : "Название слишком длинное"),
    },
    {
      id: "background",
      label: "Задний фон",
      variant: "background" as TInputVariant,
    },
  ],
};
