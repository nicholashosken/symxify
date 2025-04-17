import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentSingleSelectableFields } from "./loanLnSegmentSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanLnSegmentSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanLnSegmentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
