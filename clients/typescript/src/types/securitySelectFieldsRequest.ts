import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SecuritySingleSelectableFields } from "./securitySingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecuritySelectFieldsRequest {
    securitySecurityCategoryValue: number;
    securitySecurityCategoryValueSpecified: boolean;
    securitySecurityCategory: number | null;
    securityRecordSelectionValue: number;
    securityRecordSelectionValueSpecified: boolean;
    securityRecordSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SecuritySingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}