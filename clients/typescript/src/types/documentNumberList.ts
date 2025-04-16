import { DocumentNumber } from "./documentNumber";

export interface DocumentNumberList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    documentNumber: DocumentNumber[];
    documentNumberSpecified: boolean;
}