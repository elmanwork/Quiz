import { FC, useContext } from "react";
import { Layout, Space, Switch } from "antd";
import Icon from "@ant-design/icons";
import { Sun, Moon } from "assets/icons";
import HeaderStyle from "./Header.style";
import { ThemeContext } from "context";
import { IThemeContext } from "types";
import { Theme } from "types/enums";

const { Header: AntHeader } = Layout;

export const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext) as IThemeContext;

  return (
    <AntHeader style={HeaderStyle.header}>
      <Switch
        checkedChildren={<Icon component={Sun} />}
        unCheckedChildren={<Icon component={Moon} />}
        checked={theme === Theme.LIGHT}
        onChange={() =>
          setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        }
      />
    </AntHeader>
  );
};
