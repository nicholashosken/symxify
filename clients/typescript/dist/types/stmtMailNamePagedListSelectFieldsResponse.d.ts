import { StmtMailName } from "./stmtMailName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface StmtMailNamePagedListSelectFieldsResponse {
    stmtMailName: StmtMailName[];
    stmtMailNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
