import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ItcFraudFields_2 } from "./itcFraudFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateItcFraudByIdRequest {
    itcFraudItcFraudVendorValue: number;
    itcFraudItcFraudVendorValueSpecified: boolean;
    itcFraudItcFraudVendor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    itcFraudFields: ItcFraudFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}