import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanBankruptcyPrepetitionBalSingleSelectableFields } from "./loanBankruptcyPrepetitionBalSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanBankruptcyPrepetitionBalPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanBankruptcyId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanBankruptcyPrepetitionBalSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
