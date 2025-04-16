import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceAccessSingleSelectableFields } from "./preferenceAccessSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceAccessSelectFieldsRequest {
    accountNumber: string;
    preferenceLocatorValue: number;
    preferenceLocatorValueSpecified: boolean;
    preferenceLocator: number | null;
    preferenceAccessLocatorValue: number;
    preferenceAccessLocatorValueSpecified: boolean;
    preferenceAccessLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PreferenceAccessSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}