import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WarningsSingleSelectableFields } from "./warningsSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WarningsSelectFieldsRequest {
    warningsWarningNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WarningsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}