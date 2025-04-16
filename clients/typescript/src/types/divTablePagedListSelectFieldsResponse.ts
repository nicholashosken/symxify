import { DivTable } from "./divTable";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DivTablePagedListSelectFieldsResponse {
    divTable: DivTable[];
    divTableSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}