import { MemberRecFields } from "./memberRecFields";
import { VersionType } from "./versionType";
export interface MemberRecSingleSelectableFields {
    includeAllMemberRecFields: boolean | null;
    memberRecFields: MemberRecFields;
    version1: VersionType;
}
