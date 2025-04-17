import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralCollHoldFields_2 } from "./collateralCollHoldFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateCollateralCollHoldByIdRequest {
    collateralNumber: string;
    collateralCollHoldLocatorValue: number;
    collateralCollHoldLocatorValueSpecified: boolean;
    collateralCollHoldLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collateralCollHoldFields: CollateralCollHoldFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
