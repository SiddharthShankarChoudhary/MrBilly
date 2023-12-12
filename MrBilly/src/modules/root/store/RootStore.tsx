import { types, Instance } from "mobx-state-tree";
import React, { createContext, useContext } from "react";

export const RootStore = types.model({})

const RootStoreContext = createContext<null | Instance<typeof RootStore>>(null);

export const RootStoreProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
    const rootStore = RootStore.create();

    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    )
}

export const useRootStore = (): Instance<typeof RootStore> => {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error("Root store cannot be null, please add a context provider");
    }
    return store;
}