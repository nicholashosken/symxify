import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanFields_2 } from "./externalLoanFields_2";
import { VersionType } from "./versionType";
export interface UpdateExternalLoanByIdRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    externalLoanFields: ExternalLoanFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
