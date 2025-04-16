import { AcctTrackingType } from "./acctTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctTrackingTypeSearchPagedSelectFieldsResponse {
    acctTrackingType: AcctTrackingType[];
    acctTrackingTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}