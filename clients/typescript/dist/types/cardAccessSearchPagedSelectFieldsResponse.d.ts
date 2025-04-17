import { CardAccess } from "./cardAccess";
import { VersionType } from "./versionType";
export interface CardAccessSearchPagedSelectFieldsResponse {
    cardAccess: CardAccess[];
    token: string;
    version1: VersionType;
    messageId: string;
}
