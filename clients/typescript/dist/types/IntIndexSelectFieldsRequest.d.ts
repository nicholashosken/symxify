import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IntIndexSingleSelectableFields } from "./intIndexSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IntIndexSelectFieldsRequest {
    intIndexInterestRateIndex: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IntIndexSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
