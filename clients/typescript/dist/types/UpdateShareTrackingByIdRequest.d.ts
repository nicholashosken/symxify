import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareTrackingFields_2 } from "./shareTrackingFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateShareTrackingByIdRequest {
    accountNumber: string;
    shareId: string;
    shareTrackingLocatorValue: number;
    shareTrackingLocatorValueSpecified: boolean;
    shareTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareTrackingFields: ShareTrackingFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
