import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SiteCashOrderTypeFields_2 } from "./siteCashOrderTypeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateSiteCashOrderTypeByIdRequest {
    accountNumber: string;
    siteLocatorValue: number;
    siteLocatorValueSpecified: boolean;
    siteLocator: number | null;
    siteCashOrderTypeLocatorValue: number;
    siteCashOrderTypeLocatorValueSpecified: boolean;
    siteCashOrderTypeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    siteCashOrderTypeFields: SiteCashOrderTypeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
