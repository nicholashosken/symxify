import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanPledgeSelectableFields } from "./loanPledgeSelectableFields";
import { LoanPledgeChildrenFilter } from "./loanPledgeChildrenFilter";
import { VersionType } from "./versionType";
export interface LoanPledgeSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanPledgeSelectableFields;
    childrenSearchFilter: LoanPledgeChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
