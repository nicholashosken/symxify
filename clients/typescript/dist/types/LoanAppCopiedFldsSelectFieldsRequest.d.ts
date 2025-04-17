import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppCopiedFldsSingleSelectableFields } from "./loanAppCopiedFldsSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppCopiedFldsSelectFieldsRequest {
    loanAppCopiedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppCopiedFldsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
