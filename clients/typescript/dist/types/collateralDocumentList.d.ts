import { CollateralDocument } from "./collateralDocument";
export interface CollateralDocumentList {
    hasReachedMaximumListSize: boolean | null;
    collateralDocument: CollateralDocument[];
}
