import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanTransferFields_2 } from "./externalLoanTransferFields_2";
import { VersionType } from "./versionType";

export interface CreateExternalLoanTransferRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    externalLoanTransferFields: ExternalLoanTransferFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}