import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SiteSingleSelectableFields } from "./siteSingleSelectableFields";
import { SiteSearchFilter } from "./siteSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SiteSingleSelectableFields;
    searchFilter: SiteSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}