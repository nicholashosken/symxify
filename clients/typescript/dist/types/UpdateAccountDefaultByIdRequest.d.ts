import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AccountDefaultFields_2 } from "./accountDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdateAccountDefaultByIdRequest {
    accountDefaultAcctType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    accountDefaultFields: AccountDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
