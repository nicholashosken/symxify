import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisPlanFields_2 } from "./analysisPlanFields_2";
import { VersionType } from "./versionType";
export interface UpdateAnalysisPlanByIdRequest {
    analysisPlanIndexAnalysisPlan: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    analysisPlanFields: AnalysisPlanFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
