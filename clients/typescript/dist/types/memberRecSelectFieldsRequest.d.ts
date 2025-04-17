import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MemberRecSingleSelectableFields } from "./memberRecSingleSelectableFields";
import { VersionType } from "./versionType";
export interface MemberRecSelectFieldsRequest {
    memberRecMemberNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MemberRecSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
