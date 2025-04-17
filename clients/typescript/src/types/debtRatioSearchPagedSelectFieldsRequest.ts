import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DebtRatioSingleSelectableFields } from "./debtRatioSingleSelectableFields";
import { DebtRatioSearchFilter } from "./debtRatioSearchFilter";
import { VersionType } from "./versionType";

export interface DebtRatioSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DebtRatioSingleSelectableFields;
    searchFilter: DebtRatioSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}