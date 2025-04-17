import { GlTable } from "./glTable";
export interface GlTableList {
    hasReachedMaximumListSize: boolean | null;
    glTable: GlTable[];
}
