import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CurrencyCtrlSingleSelectableFields } from "./currencyCtrlSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CurrencyCtrlSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CurrencyCtrlSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}