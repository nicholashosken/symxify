import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NameFields_2 } from "./nameFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateNameByIdRequest {
    accountNumber: string;
    nameLocatorValue: number;
    nameLocatorValueSpecified: boolean;
    nameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    nameFields: NameFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
