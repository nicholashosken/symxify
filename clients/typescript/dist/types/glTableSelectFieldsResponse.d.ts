import { GlTable } from "./glTable";
import { VersionType } from "./versionType";
export interface GlTableSelectFieldsResponse {
    glTable: GlTable;
    version1: VersionType;
    messageId: string;
}
