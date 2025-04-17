import { MoProduct } from "./moProduct";

export interface MoProductList {
    hasReachedMaximumListSize: boolean | null;
    moProduct: MoProduct[];
}