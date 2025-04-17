import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckSingleSelectableFields } from "./checkSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CheckSelectFieldsRequest {
    checkGlobalSequenceDate: string | null;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CheckSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}