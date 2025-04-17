import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanPledgeSingleSelectableFields } from "./loanPledgeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanPledgeSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanPledgeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}