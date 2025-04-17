import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ScreenDefinitionSingleSelectableFields } from "./screenDefinitionSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ScreenDefinitionSelectFieldsRequest {
    screenDefinitionScreenSelection: number | null;
    screenDefinitionType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ScreenDefinitionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
