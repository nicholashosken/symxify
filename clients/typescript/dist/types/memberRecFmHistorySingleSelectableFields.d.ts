import { MemberRecFmHistoryFields } from "./memberRecFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MemberRecFmHistorySingleSelectableFields {
    includeAllMemberRecFmHistoryFieldsValue: boolean;
    includeAllMemberRecFmHistoryFieldsValueSpecified: boolean;
    includeAllMemberRecFmHistoryFields: boolean | null;
    memberRecFmHistoryFields: MemberRecFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
