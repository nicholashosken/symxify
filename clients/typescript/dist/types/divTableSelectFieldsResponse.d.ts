import { DivTable } from "./divTable";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DivTableSelectFieldsResponse {
    divTable: DivTable;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
