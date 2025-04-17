import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DebtRatioSingleSelectableFields } from "./debtRatioSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DebtRatioSelectFieldsRequest {
    debtRatioType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DebtRatioSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
