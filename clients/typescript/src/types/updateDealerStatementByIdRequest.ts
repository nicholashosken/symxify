import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerStatementFields_2 } from "./dealerStatementFields_2";
import { VersionType } from "./versionType";

export interface UpdateDealerStatementByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    dealerStatementFields: DealerStatementFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}