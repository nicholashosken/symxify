import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TrackingFields_2 } from "./trackingFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateTrackingByIdRequest {
    accountNumber: string;
    trackingLocatorValue: number;
    trackingLocatorValueSpecified: boolean;
    trackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    trackingFields: TrackingFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}