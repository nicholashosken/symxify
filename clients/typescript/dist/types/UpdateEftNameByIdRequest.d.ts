import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftNameFields_2 } from "./eftNameFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateEftNameByIdRequest {
    accountNumber: string;
    eftLocatorValue: number;
    eftLocatorValueSpecified: boolean;
    eftLocator: number | null;
    eftNameLocatorValue: number;
    eftNameLocatorValueSpecified: boolean;
    eftNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftNameFields: EftNameFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
