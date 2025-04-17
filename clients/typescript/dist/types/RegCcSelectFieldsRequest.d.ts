import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { RegCcSingleSelectableFields } from "./regCcSingleSelectableFields";
import { VersionType } from "./versionType";
export interface RegCcSelectFieldsRequest {
    regCcBranch: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: RegCcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
