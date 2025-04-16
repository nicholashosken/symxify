import { AcctTrackingType } from "./acctTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctTrackingTypeSelectFieldsResponse {
    acctTrackingType: AcctTrackingType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
