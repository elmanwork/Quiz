import { Theme } from "types/enums";

export interface IThemeContext {
    theme: Theme;
    setTheme: (arg: Theme) => void;
}