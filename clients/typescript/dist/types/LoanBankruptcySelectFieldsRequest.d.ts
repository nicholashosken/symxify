import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBankruptcySingleSelectableFields } from "./loanBankruptcySingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanBankruptcySelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanBankruptcyId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanBankruptcySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
