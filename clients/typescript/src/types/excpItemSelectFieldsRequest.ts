import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpItemSingleSelectableFields } from "./excpItemSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExcpItemSelectFieldsRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpItemSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}