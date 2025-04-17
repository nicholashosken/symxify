import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EscrowAnalysisFields_2 } from "./escrowAnalysisFields_2";
import { VersionType } from "./versionType";

export interface UpdateEscrowAnalysisByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    escrowAnalysisFields: EscrowAnalysisFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}