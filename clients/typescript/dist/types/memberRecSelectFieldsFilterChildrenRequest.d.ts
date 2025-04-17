import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MemberRecSelectableFields } from "./memberRecSelectableFields";
import { MemberRecChildrenFilter } from "./memberRecChildrenFilter";
import { VersionType } from "./versionType";
export interface MemberRecSelectFieldsFilterChildrenRequest {
    memberRecMemberNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MemberRecSelectableFields;
    childrenSearchFilter: MemberRecChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
