import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LnSegmentDefaultSingleSelectableFields } from "./lnSegmentDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LnSegmentDefaultSelectFieldsRequest {
    lnSegmentDefaultSegmentType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LnSegmentDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}