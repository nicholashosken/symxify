import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareHoldFields_2 } from "./shareHoldFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateShareHoldByIdRequest {
    accountNumber: string;
    shareId: string;
    shareHoldLocatorValue: number;
    shareHoldLocatorValueSpecified: boolean;
    shareHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareHoldFields: ShareHoldFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}