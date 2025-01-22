import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Slice } from "@reduxjs/toolkit";

interface MockstoreProps<State> {
  children: ReactNode;
  preloadedState?: {
    [key: string]: State;
  };
  slice?: Slice;
}

function Mockstore<State>({
  children,
  preloadedState,
  slice,
}: MockstoreProps<State>) {
  return (
    <Provider
      store={configureStore({
        reducer: slice ? { [slice.name]: slice.reducer } : {},
        preloadedState,
      })}
    >
      {children}
    </Provider>
  );
}

export default Mockstore;
