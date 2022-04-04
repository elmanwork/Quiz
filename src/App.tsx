import { IAppConfig } from "types";
import "./App.css";
import { Routes } from "router";

declare global {
  interface Window {
    env: IAppConfig;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : any;
  }
}

function App() {
  return (
   <Routes/>
  );
}

export default App;
