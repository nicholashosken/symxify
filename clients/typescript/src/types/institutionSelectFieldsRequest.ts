import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InstitutionSingleSelectableFields } from "./institutionSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InstitutionSelectFieldsRequest {
    institutionBranch: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InstitutionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}