import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SiteSelectableFields } from "./siteSelectableFields";
import { SiteChildrenFilter } from "./siteChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    siteLocatorValue: number;
    siteLocatorValueSpecified: boolean;
    siteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SiteSelectableFields;
    childrenSearchFilter: SiteChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}