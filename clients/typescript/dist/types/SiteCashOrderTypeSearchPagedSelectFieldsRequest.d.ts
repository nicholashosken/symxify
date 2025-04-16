import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SiteCashOrderTypeSingleSelectableFields } from "./siteCashOrderTypeSingleSelectableFields";
import { SiteCashOrderTypeSearchFilter } from "./siteCashOrderTypeSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SiteCashOrderTypeSearchPagedSelectFieldsRequest {
    accountNumber: string;
    siteLocatorValue: number;
    siteLocatorValueSpecified: boolean;
    siteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SiteCashOrderTypeSingleSelectableFields;
    searchFilter: SiteCashOrderTypeSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
