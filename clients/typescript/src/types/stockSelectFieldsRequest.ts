import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StockSingleSelectableFields } from "./stockSingleSelectableFields";
import { VersionType } from "./versionType";

export interface StockSelectFieldsRequest {
    stockType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: StockSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}