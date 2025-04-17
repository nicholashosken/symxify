import { MemberRecFmHistoryFields } from "./memberRecFmHistoryFields";
import { VersionType } from "./versionType";

export interface MemberRecFmHistorySelectableFields {
    includeAllMemberRecFmHistoryFields: boolean | null;
    memberRecFmHistoryFields: MemberRecFmHistoryFields;
    version1: VersionType;
}