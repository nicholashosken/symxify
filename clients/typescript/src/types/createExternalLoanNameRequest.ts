import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanNameFields_2 } from "./externalLoanNameFields_2";
import { VersionType } from "./versionType";

export interface CreateExternalLoanNameRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    externalLoanNameFields: ExternalLoanNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}