import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftAddendaInfoFields_2 } from "./eftAddendaInfoFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateEftAddendaInfoByIdRequest {
    accountNumber: string;
    eftLocatorValue: number;
    eftLocatorValueSpecified: boolean;
    eftLocator: number | null;
    eftAddendaInfoLocatorValue: number;
    eftAddendaInfoLocatorValueSpecified: boolean;
    eftAddendaInfoLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftAddendaInfoFields: EftAddendaInfoFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
