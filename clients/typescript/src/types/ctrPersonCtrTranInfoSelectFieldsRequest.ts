import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonCtrTranInfoSingleSelectableFields } from "./ctrPersonCtrTranInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrPersonCtrTranInfoSelectFieldsRequest {
    ctrNumber: string;
    ctrPersonLocator: number | null;
    ctrPersonCtrTranInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrPersonCtrTranInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}