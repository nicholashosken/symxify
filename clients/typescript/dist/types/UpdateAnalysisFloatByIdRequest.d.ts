import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisFloatFields_2 } from "./analysisFloatFields_2";
import { VersionType } from "./versionType";
export interface UpdateAnalysisFloatByIdRequest {
    analysisFloatBranch: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    analysisFloatFields: AnalysisFloatFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
