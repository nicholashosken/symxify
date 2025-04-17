import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LnSegmentDefaultFields_2 } from "./lnSegmentDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdateLnSegmentDefaultByIdRequest {
    lnSegmentDefaultSegmentType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    lnSegmentDefaultFields: LnSegmentDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
