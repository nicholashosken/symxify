import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanTrackingFields_2 } from "./externalLoanTrackingFields_2";
import { VersionType } from "./versionType";
export interface CreateExternalLoanTrackingRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    externalLoanTrackingFields: ExternalLoanTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
