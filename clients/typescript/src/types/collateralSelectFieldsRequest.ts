import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralSingleSelectableFields } from "./collateralSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}