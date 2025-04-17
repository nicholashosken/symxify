import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppSelectableFields } from "./loanAppSelectableFields";
import { LoanAppChildrenFilter } from "./loanAppChildrenFilter";
import { VersionType } from "./versionType";

export interface LoanAppSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppSelectableFields;
    childrenSearchFilter: LoanAppChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}