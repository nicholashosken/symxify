import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralDocumentFields_2 } from "./collateralDocumentFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CreateCollateralDocumentRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collateralDocumentFields: CollateralDocumentFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
