import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBankruptcySelectableFields } from "./loanBankruptcySelectableFields";
import { LoanBankruptcyChildrenFilter } from "./loanBankruptcyChildrenFilter";
import { VersionType } from "./versionType";
export interface LoanBankruptcySelectFieldsFilterChildrenRequest {
    accountNumber: string;
    loanId: string;
    loanBankruptcyId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanBankruptcySelectableFields;
    childrenSearchFilter: LoanBankruptcyChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
