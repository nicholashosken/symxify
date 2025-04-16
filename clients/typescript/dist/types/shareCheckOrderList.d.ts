import { ShareCheckOrder } from "./shareCheckOrder";
export interface ShareCheckOrderList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareCheckOrder: ShareCheckOrder[];
    shareCheckOrderSpecified: boolean;
}
