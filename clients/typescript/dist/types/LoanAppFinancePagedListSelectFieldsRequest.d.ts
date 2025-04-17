import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppFinanceSingleSelectableFields } from "./loanAppFinanceSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppFinancePagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppFinanceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
