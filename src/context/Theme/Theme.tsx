import { createContext, FC, ReactChild, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { IThemeContext } from "types";
import { Theme } from 'types/enums';
import { Theme as AntTheme } from "antd/lib/config-provider/context";

export interface IThemeProviderProps {
  children: ReactChild;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return Theme.DARK;
  });

  useEffect(() => {

    let themeObj: AntTheme;
    
    switch(theme){
        case Theme.DARK:
            themeObj = {
                primaryColor: "#108ee9",
                infoColor: "red"
            }
        break;

        case Theme.LIGHT:
        default:  
            themeObj = {
                primaryColor: "red",
                infoColor: "yellow"
            }
        break;
    }

    ConfigProvider.config({
      theme: themeObj,
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
