"use client";
import React from "react";
import { Provider } from "react-redux"; 
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "@/Redux/Slice/store";

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};