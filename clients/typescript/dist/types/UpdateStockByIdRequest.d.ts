import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StockFields_2 } from "./stockFields_2";
import { VersionType } from "./versionType";
export interface UpdateStockByIdRequest {
    stockType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    stockFields: StockFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
