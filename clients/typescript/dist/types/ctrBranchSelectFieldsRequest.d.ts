import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrBranchSingleSelectableFields } from "./ctrBranchSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CtrBranchSelectFieldsRequest {
    ctrNumber: string;
    ctrBranchLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrBranchSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
