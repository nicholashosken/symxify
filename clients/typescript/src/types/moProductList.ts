import { MoProduct } from "./moProduct";

export interface MoProductList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    moProduct: MoProduct[];
    moProductSpecified: boolean;
}