import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DeleteGlAccountTrackingRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    glAccountTrackingLocatorValue: number;
    glAccountTrackingLocatorValueSpecified: boolean;
    glAccountTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}