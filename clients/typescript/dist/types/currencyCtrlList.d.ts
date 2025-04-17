import { CurrencyCtrl } from "./currencyCtrl";
export interface CurrencyCtrlList {
    hasReachedMaximumListSize: boolean | null;
    currencyCtrl: CurrencyCtrl[];
}
