import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ItcInstallationFields_2 } from "./itcInstallationFields_2";
import { VersionType } from "./versionType";
export interface UpdateItcInstallationByIdRequest {
    itcInstallationItcInstallation: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    itcInstallationFields: ItcInstallationFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
