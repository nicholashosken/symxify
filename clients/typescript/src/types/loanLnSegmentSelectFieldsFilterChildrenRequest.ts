import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentSelectableFields } from "./loanLnSegmentSelectableFields";
import { LoanLnSegmentChildrenFilter } from "./loanLnSegmentChildrenFilter";
import { VersionType } from "./versionType";

export interface LoanLnSegmentSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanLnSegmentSelectableFields;
    childrenSearchFilter: LoanLnSegmentChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}