import { SiteCashOrderType } from "./siteCashOrderType";
export interface SiteCashOrderTypeList {
    hasReachedMaximumListSize: boolean | null;
    siteCashOrderType: SiteCashOrderType[];
}
