import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsNameFields_2 } from "./irsNameFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateIrsNameByIdRequest {
    accountNumber: string;
    irsLocatorValue: number;
    irsLocatorValueSpecified: boolean;
    irsLocator: number | null;
    irsNameLocatorValue: number;
    irsNameLocatorValueSpecified: boolean;
    irsNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    irsNameFields: IrsNameFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}