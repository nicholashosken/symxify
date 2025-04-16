import { InsTable } from "./insTable";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InsTableSelectFieldsResponse {
    insTable: InsTable;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}