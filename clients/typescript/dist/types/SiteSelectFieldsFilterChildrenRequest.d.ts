import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SiteSelectableFields } from "./siteSelectableFields";
import { SiteChildrenFilter } from "./siteChildrenFilter";
import { VersionType } from "./versionType";
export interface SiteSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    siteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SiteSelectableFields;
    childrenSearchFilter: SiteChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
