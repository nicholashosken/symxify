import { MemberRecFmHistory } from "./memberRecFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MemberRecFmHistoryPagedListSelectFieldsResponse {
    memberRecFmHistory: MemberRecFmHistory[];
    memberRecFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
