import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralTrackingFields_2 } from "./collateralTrackingFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCollateralTrackingByIdRequest {
    collateralNumber: string;
    collateralTrackingLocatorValue: number;
    collateralTrackingLocatorValueSpecified: boolean;
    collateralTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collateralTrackingFields: CollateralTrackingFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}