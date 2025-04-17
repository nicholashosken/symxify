import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppPersonSingleSelectableFields } from "./loanAppPersonSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppPersonPagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppPersonSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
