import { DocTypeDefault } from "./docTypeDefault";

export interface DocTypeDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    docTypeDefault: DocTypeDefault[];
    docTypeDefaultSpecified: boolean;
}