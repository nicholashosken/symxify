import { TcProduct } from "./tcProduct";

export interface TcProductList {
    hasReachedMaximumListSize: boolean | null;
    tcProduct: TcProduct[];
}