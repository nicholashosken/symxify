import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TptSingleSelectableFields } from "./tptSingleSelectableFields";
import { VersionType } from "./versionType";

export interface TptSelectFieldsRequest {
    tptPrinter: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TptSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}