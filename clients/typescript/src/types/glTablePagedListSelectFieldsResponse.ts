import { GlTable } from "./glTable";
import { VersionType } from "./versionType";

export interface GlTablePagedListSelectFieldsResponse {
    glTable: GlTable[];
    token: string;
    version1: VersionType;
    messageId: string;
}