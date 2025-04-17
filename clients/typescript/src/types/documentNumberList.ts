import { DocumentNumber } from "./documentNumber";

export interface DocumentNumberList {
    hasReachedMaximumListSize: boolean | null;
    documentNumber: DocumentNumber[];
}