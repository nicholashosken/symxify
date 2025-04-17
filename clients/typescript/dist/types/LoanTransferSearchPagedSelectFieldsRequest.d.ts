import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanTransferSingleSelectableFields } from "./loanTransferSingleSelectableFields";
import { LoanTransferSearchFilter } from "./loanTransferSearchFilter";
import { VersionType } from "./versionType";
export interface LoanTransferSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanTransferSingleSelectableFields;
    searchFilter: LoanTransferSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
