import { CollateralDocumentChildrenFilter } from "./collateralDocumentChildrenFilter";

export interface CollateralDocumentFilter {
    query: string;
    collateralDocumentChildrenFilter: CollateralDocumentChildrenFilter;
}