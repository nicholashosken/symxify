import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlAccountTrackingFields_2 } from "./glAccountTrackingFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CreateGlAccountTrackingRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    glAccountTrackingFields: GlAccountTrackingFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}