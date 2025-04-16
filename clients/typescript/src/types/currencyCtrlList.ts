import { CurrencyCtrl } from "./currencyCtrl";

export interface CurrencyCtrlList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    currencyCtrl: CurrencyCtrl[];
    currencyCtrlSpecified: boolean;
}