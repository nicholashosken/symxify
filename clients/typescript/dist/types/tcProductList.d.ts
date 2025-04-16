import { TcProduct } from "./tcProduct";
export interface TcProductList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    tcProduct: TcProduct[];
    tcProductSpecified: boolean;
}
