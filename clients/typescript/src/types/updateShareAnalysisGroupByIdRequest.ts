import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisGroupFields_2 } from "./shareAnalysisGroupFields_2";
import { VersionType } from "./versionType";

export interface UpdateShareAnalysisGroupByIdRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisGroupLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisGroupFields: ShareAnalysisGroupFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}