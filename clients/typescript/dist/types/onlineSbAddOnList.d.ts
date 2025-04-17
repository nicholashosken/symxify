import { OnlineSbAddOn } from "./onlineSbAddOn";
export interface OnlineSbAddOnList {
    hasReachedMaximumListSize: boolean | null;
    onlineSbAddOn: OnlineSbAddOn[];
}
