import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanSelectableFields } from "./loanSelectableFields";
import { LoanChildrenFilter } from "./loanChildrenFilter";
import { VersionType } from "./versionType";
export interface LoanSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanSelectableFields;
    childrenSearchFilter: LoanChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
