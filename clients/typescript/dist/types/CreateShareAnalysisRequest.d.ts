import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisFields_2 } from "./shareAnalysisFields_2";
import { VersionType } from "./versionType";
export interface CreateShareAnalysisRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisFields: ShareAnalysisFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
