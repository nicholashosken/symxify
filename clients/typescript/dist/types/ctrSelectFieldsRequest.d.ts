import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrSingleSelectableFields } from "./ctrSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CtrSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
