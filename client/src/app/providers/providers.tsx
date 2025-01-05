import { FC } from "react";

import { Provider } from "react-redux";
import { store } from "../store";

interface IProvider {
  children: JSX.Element;
}

export const Providers: FC<IProvider> = ({ children }: IProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
