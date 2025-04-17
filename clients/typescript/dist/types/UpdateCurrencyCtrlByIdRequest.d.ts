import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CurrencyCtrlFields_2 } from "./currencyCtrlFields_2";
import { VersionType } from "./versionType";
export interface UpdateCurrencyCtrlByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    currencyCtrlFields: CurrencyCtrlFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
