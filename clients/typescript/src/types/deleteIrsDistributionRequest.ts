import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DeleteIrsDistributionRequest {
    accountNumber: string;
    irsLocatorValue: number;
    irsLocatorValueSpecified: boolean;
    irsLocator: number | null;
    irsDistributionLocatorValue: number;
    irsDistributionLocatorValueSpecified: boolean;
    irsDistributionLocator: number | null;
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