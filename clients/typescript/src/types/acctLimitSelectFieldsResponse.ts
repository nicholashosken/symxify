import { AcctLimit } from "./acctLimit";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctLimitSelectFieldsResponse {
    acctLimit: AcctLimit;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}