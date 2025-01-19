import { Switch } from "../../../shared/ui/switch/switch.tsx";
import { Button } from "../../../shared/ui/buttons/button/button.tsx";

export const HomePage = () => {
  return (
    <div>
      <p className={"font-light"}>Текст 1 легкий</p>
      <p className={"font-regular"}>Текст 2 обычный</p>
      <p className={"font-medium"}>Текст 3 средний</p>
      <p className={"font-bold"}>Текст 4 жирный</p>
      <p className={"font-extraBold"}>Тексsssт 5 очень жирный</p>
      <input type={"color"}></input>

      <div className="flex gap-2 flex-col text-center bg-additional dark:bg-transparent text-blue-500">
        TailwindCSS работает!
        <Button>Базовая кнопка</Button>
        <Button variant={"cancel"}>Отменить</Button>
        <Button variant={"secondary"}>Вторичная кнопка</Button>
        <Switch
          name={"test"}
          values={[
            { text: "Значение 1", value: "1" },
            { text: "Значение 2", value: "2" },
          ]}
        />
      </div>
    </div>
  );
};
