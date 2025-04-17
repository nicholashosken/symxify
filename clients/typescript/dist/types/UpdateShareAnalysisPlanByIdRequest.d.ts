import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisPlanFields_2 } from "./shareAnalysisPlanFields_2";
import { VersionType } from "./versionType";
export interface UpdateShareAnalysisPlanByIdRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisPlanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisPlanFields: ShareAnalysisPlanFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
