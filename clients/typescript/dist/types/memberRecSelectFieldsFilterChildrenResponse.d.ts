import { MemberRec } from "./memberRec";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MemberRecSelectFieldsFilterChildrenResponse {
    memberRec: MemberRec;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
