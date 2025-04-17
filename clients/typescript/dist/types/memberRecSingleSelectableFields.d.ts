import { MemberRecFields } from "./memberRecFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MemberRecSingleSelectableFields {
    includeAllMemberRecFieldsValue: boolean;
    includeAllMemberRecFieldsValueSpecified: boolean;
    includeAllMemberRecFields: boolean | null;
    memberRecFields: MemberRecFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
