import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisFields_2 } from "./shareAnalysisFields_2";
import { VersionType } from "./versionType";

export interface UpdateShareAnalysisByIdRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisFields: ShareAnalysisFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}