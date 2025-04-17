import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { BatchAchOrigSingleSelectableFields } from "./batchAchOrigSingleSelectableFields";
import { BatchAchOrigSearchFilter } from "./batchAchOrigSearchFilter";
import { VersionType } from "./versionType";
export interface BatchAchOrigSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: BatchAchOrigSingleSelectableFields;
    searchFilter: BatchAchOrigSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
