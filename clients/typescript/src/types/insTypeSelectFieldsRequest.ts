import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InsTypeSingleSelectableFields } from "./insTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InsTypeSelectFieldsRequest {
    insTypeInsuranceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InsTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}