import { AcctRelCodeDesc } from "./acctRelCodeDesc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctRelCodeDescSelectFieldsResponse {
    acctRelCodeDesc: AcctRelCodeDesc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}