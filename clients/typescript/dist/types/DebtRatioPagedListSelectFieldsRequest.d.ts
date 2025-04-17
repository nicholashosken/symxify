import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DebtRatioSingleSelectableFields } from "./debtRatioSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DebtRatioPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DebtRatioSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
