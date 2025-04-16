import { CollateralType } from "./collateralType";

export interface CollateralTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    collateralType: CollateralType[];
    collateralTypeSpecified: boolean;
}