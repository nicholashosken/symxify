import { AcctTypeName } from "./acctTypeName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctTypeNameSelectFieldsResponse {
    acctTypeName: AcctTypeName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}