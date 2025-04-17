import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralCollHoldSingleSelectableFields } from "./collateralCollHoldSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralCollHoldSelectFieldsRequest {
    collateralNumber: string;
    collateralCollHoldLocatorValue: number;
    collateralCollHoldLocatorValueSpecified: boolean;
    collateralCollHoldLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralCollHoldSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}