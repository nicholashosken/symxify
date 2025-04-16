import { AcctTypeName } from "./acctTypeName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctTypeNamePagedListSelectFieldsResponse {
    acctTypeName: AcctTypeName[];
    acctTypeNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
