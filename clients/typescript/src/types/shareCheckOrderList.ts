import { ShareCheckOrder } from "./shareCheckOrder";

export interface ShareCheckOrderList {
    hasReachedMaximumListSize: boolean | null;
    shareCheckOrder: ShareCheckOrder[];
}