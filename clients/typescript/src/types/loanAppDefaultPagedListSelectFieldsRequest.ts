import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppDefaultSingleSelectableFields } from "./loanAppDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppDefaultPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}