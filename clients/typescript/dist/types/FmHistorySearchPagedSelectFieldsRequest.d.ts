import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { FmHistorySingleSelectableFields } from "./fmHistorySingleSelectableFields";
import { FmHistorySearchFilter } from "./fmHistorySearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface FmHistorySearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: FmHistorySingleSelectableFields;
    searchFilter: FmHistorySearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
