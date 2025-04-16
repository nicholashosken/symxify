import { StmtMailName } from "./stmtMailName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface StmtMailNameSelectFieldsResponse {
    stmtMailName: StmtMailName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
