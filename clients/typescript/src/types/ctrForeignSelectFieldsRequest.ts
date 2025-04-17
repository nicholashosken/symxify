import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrForeignSingleSelectableFields } from "./ctrForeignSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrForeignSelectFieldsRequest {
    ctrNumber: string;
    ctrForeignLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrForeignSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}