import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBankruptcyPrepetitionBalSingleSelectableFields } from "./loanBankruptcyPrepetitionBalSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanBankruptcyPrepetitionBalSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanBankruptcyId: string;
    loanBankruptcyPrepetitionBalId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanBankruptcyPrepetitionBalSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
