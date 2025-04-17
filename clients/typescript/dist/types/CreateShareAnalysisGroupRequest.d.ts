import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisGroupFields_2 } from "./shareAnalysisGroupFields_2";
import { VersionType } from "./versionType";
export interface CreateShareAnalysisGroupRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisGroupFields: ShareAnalysisGroupFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
