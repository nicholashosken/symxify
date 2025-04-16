import { OnlineSbAddOn } from "./onlineSbAddOn";

export interface OnlineSbAddOnList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineSbAddOn: OnlineSbAddOn[];
    onlineSbAddOnSpecified: boolean;
}