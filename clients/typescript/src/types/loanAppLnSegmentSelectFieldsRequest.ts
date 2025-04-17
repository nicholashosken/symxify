import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppLnSegmentSingleSelectableFields } from "./loanAppLnSegmentSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppLnSegmentSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppLnSegmentId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppLnSegmentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}