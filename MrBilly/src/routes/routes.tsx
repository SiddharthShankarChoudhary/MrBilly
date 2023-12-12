import { observer } from "mobx-react";
import { RouteObject, useRoutes } from "react-router-dom";
import { RootPage } from "../modules/root/pages/RootPage";

const getRoutes = (): RouteObject[] => {
    return [
        {
            path: "/",
            element: <RootPage />
        }
    ];
}

export const Router = observer((): React.ReactElement | null => {
    const routes = getRoutes();

    return useRoutes(routes);
})