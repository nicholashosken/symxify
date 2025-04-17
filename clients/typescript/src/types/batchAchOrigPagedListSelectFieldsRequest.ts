import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { BatchAchOrigSingleSelectableFields } from "./batchAchOrigSingleSelectableFields";
import { VersionType } from "./versionType";

export interface BatchAchOrigPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: BatchAchOrigSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}