import { CollateralType } from "./collateralType";
export interface CollateralTypeList {
    hasReachedMaximumListSize: boolean | null;
    collateralType: CollateralType[];
}
