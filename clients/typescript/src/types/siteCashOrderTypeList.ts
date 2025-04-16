import { SiteCashOrderType } from "./siteCashOrderType";

export interface SiteCashOrderTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    siteCashOrderType: SiteCashOrderType[];
    siteCashOrderTypeSpecified: boolean;
}