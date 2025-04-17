import { MemberRecFields } from "./memberRecFields";
import { MemberRecFmHistorySelectableFields } from "./memberRecFmHistorySelectableFields";
import { VersionType } from "./versionType";
export interface MemberRecSelectableFields {
    includeAllMemberRecFields: boolean | null;
    memberRecFields: MemberRecFields;
    memberRecFmHistorySelectableFields: MemberRecFmHistorySelectableFields;
    version1: VersionType;
}
