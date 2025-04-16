import { Statement } from "./statement";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface StatementSelectFieldsResponse {
    statement: Statement;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
