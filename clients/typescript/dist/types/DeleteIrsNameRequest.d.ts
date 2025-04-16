import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DeleteIrsNameRequest {
    accountNumber: string;
    irsLocatorValue: number;
    irsLocatorValueSpecified: boolean;
    irsLocator: number | null;
    irsNameLocatorValue: number;
    irsNameLocatorValueSpecified: boolean;
    irsNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
