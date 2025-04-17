import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralFields_2 } from "./collateralFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CreateCollateralRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collateralFields: CollateralFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}