import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppScheduleSingleSelectableFields } from "./loanAppScheduleSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppSchedulePagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppScheduleSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}