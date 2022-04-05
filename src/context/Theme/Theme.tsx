import { createContext, FC, ReactChild, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { IThemeContext } from "types";
import { Theme } from 'types/enums';
import { Theme as AntTheme } from "antd/lib/config-provider/context";

export interface IThemeProviderProps {
  children: ReactChild;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return Theme.DARK;
  });

  useEffect(() => {

    let themeObj: AntTheme;
    
    switch(theme){
        case Theme.DARK:
            themeObj = {
                primaryColor: "#00adb5"
            }
        break;

        case Theme.LIGHT:
        default:  
            themeObj = {
                primaryColor: "red"
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
