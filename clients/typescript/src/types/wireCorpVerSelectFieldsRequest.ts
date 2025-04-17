import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireCorpVerSingleSelectableFields } from "./wireCorpVerSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireCorpVerSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireCorpVerSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}