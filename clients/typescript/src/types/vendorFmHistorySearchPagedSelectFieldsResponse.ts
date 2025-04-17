import { VendorFmHistory } from "./vendorFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface VendorFmHistorySearchPagedSelectFieldsResponse {
    vendorFmHistory: VendorFmHistory[];
    vendorFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}