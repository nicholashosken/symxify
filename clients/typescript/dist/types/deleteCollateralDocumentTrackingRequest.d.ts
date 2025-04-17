import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DeleteCollateralDocumentTrackingRequest {
    collateralNumber: string;
    collateralDocumentLocatorValue: number;
    collateralDocumentLocatorValueSpecified: boolean;
    collateralDocumentLocator: number | null;
    collateralDocumentTrackingLocatorValue: number;
    collateralDocumentTrackingLocatorValueSpecified: boolean;
    collateralDocumentTrackingLocator: number | null;
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
