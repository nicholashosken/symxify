import { MemberRecFields } from "./memberRecFields";
import { MemberRecFmHistorySelectableFields } from "./memberRecFmHistorySelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MemberRecSelectableFields {
    includeAllMemberRecFieldsValue: boolean;
    includeAllMemberRecFieldsValueSpecified: boolean;
    includeAllMemberRecFields: boolean | null;
    memberRecFields: MemberRecFields;
    memberRecFmHistorySelectableFields: MemberRecFmHistorySelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
