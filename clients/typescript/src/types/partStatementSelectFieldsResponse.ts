import { PartStatement } from "./partStatement";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartStatementSelectFieldsResponse {
    partStatement: PartStatement;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}