import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineOutletSingleSelectableFields } from "./onlineOutletSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineOutletSelectFieldsRequest {
    onlineOutletBranchNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineOutletSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
