import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DebtRatioFields_2 } from "./debtRatioFields_2";
import { VersionType } from "./versionType";
export interface UpdateDebtRatioByIdRequest {
    debtRatioType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    debtRatioFields: DebtRatioFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
