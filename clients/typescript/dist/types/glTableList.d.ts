import { GlTable } from "./glTable";
export interface GlTableList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glTable: GlTable[];
    glTableSpecified: boolean;
}
