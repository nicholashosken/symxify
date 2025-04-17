import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MiscPmtSingleSelectableFields } from "./miscPmtSingleSelectableFields";
import { VersionType } from "./versionType";
export interface MiscPmtSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MiscPmtSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
