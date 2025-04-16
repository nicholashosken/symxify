import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceSelectableFields } from "./preferenceSelectableFields";
import { PreferenceChildrenFilter } from "./preferenceChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    preferenceLocatorValue: number;
    preferenceLocatorValueSpecified: boolean;
    preferenceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PreferenceSelectableFields;
    childrenSearchFilter: PreferenceChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}