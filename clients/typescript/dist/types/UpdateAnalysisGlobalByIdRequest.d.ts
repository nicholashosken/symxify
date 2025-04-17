import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisGlobalFields_2 } from "./analysisGlobalFields_2";
import { VersionType } from "./versionType";
export interface UpdateAnalysisGlobalByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    analysisGlobalFields: AnalysisGlobalFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
