import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardTrackingFields_2 } from "./cpWorkCardTrackingFields_2";
import { VersionType } from "./versionType";
export interface CreateCpWorkCardTrackingRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    cpWorkCardTrackingFields: CpWorkCardTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
