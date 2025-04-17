import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppViewAppSingleSelectableFields } from "./loanAppViewAppSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppViewAppPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppViewAppSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}