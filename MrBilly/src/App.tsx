import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RootStoreProvider } from './modules/root/store/RootStore';
import { Router } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

export default function App(): JSX.Element {
  return (
    <RootStoreProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RootStoreProvider>
  );
}
