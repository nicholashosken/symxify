import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlAccountFmHistorySingleSelectableFields } from "./glAccountFmHistorySingleSelectableFields";
import { GlAccountFmHistorySearchFilter } from "./glAccountFmHistorySearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlAccountFmHistorySearchPagedSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlAccountFmHistorySingleSelectableFields;
    searchFilter: GlAccountFmHistorySearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
