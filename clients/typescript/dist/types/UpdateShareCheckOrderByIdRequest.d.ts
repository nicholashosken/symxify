import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareCheckOrderFields_2 } from "./shareCheckOrderFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateShareCheckOrderByIdRequest {
    accountNumber: string;
    shareId: string;
    shareCheckOrderLocatorValue: number;
    shareCheckOrderLocatorValueSpecified: boolean;
    shareCheckOrderLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareCheckOrderFields: ShareCheckOrderFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
