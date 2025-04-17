import { CardAccess } from "./cardAccess";
import { VersionType } from "./versionType";
export interface CardAccessPagedListSelectFieldsResponse {
    cardAccess: CardAccess[];
    token: string;
    version1: VersionType;
    messageId: string;
}
