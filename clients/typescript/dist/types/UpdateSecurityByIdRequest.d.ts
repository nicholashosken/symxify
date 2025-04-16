import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SecurityFields_2 } from "./securityFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateSecurityByIdRequest {
    securitySecurityCategoryValue: number;
    securitySecurityCategoryValueSpecified: boolean;
    securitySecurityCategory: number | null;
    securityRecordSelectionValue: number;
    securityRecordSelectionValueSpecified: boolean;
    securityRecordSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    securityFields: SecurityFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
