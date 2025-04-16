import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LookupFields_2 } from "./lookupFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLookupByIdRequest {
    accountNumber: string;
    lookupLocatorValue: number;
    lookupLocatorValueSpecified: boolean;
    lookupLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    lookupFields: LookupFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}