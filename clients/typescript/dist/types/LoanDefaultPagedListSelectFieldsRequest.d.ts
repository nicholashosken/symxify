import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanDefaultSingleSelectableFields } from "./loanDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanDefaultPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
