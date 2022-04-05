import { Layout } from "antd";
import { IAppConfig } from "types";
import { Routes } from "router";
import AppStyle from "./App.style";
import { Header } from 'components';


declare global {
  interface Window {
    env: IAppConfig;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

function App() {
  return (
    <Layout style={AppStyle.layout}>
      <Header/>
      <Routes />
    </Layout>
  );
}

export default App;
