import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareNameFields_2 } from "./shareNameFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateShareNameByIdRequest {
    accountNumber: string;
    shareId: string;
    shareNameLocatorValue: number;
    shareNameLocatorValueSpecified: boolean;
    shareNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareNameFields: ShareNameFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
