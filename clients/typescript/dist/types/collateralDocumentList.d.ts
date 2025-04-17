import { CollateralDocument } from "./collateralDocument";
export interface CollateralDocumentList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    collateralDocument: CollateralDocument[];
    collateralDocumentSpecified: boolean;
}
