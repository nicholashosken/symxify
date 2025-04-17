import { MemberRec } from "./memberRec";
import { VersionType } from "./versionType";
export interface MemberRecSelectFieldsResponse {
    memberRec: MemberRec;
    version1: VersionType;
    messageId: string;
}
