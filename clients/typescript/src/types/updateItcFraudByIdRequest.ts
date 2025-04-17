import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ItcFraudFields_2 } from "./itcFraudFields_2";
import { VersionType } from "./versionType";

export interface UpdateItcFraudByIdRequest {
    itcFraudItcFraudVendor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    itcFraudFields: ItcFraudFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}