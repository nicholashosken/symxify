import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBillingFields_2 } from "./loanBillingFields_2";
import { VersionType } from "./versionType";
export interface UpdateLoanBillingByIdRequest {
    accountNumber: string;
    loanId: string;
    loanBillingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanBillingFields: LoanBillingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
