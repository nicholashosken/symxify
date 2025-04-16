import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CredRepSelectableFields } from "./credRepSelectableFields";
import { CredRepChildrenFilter } from "./credRepChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CredRepSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    credRepLocatorValue: number;
    credRepLocatorValueSpecified: boolean;
    credRepLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CredRepSelectableFields;
    childrenSearchFilter: CredRepChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}