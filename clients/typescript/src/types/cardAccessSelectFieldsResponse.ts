import { CardAccess } from "./cardAccess";
import { VersionType } from "./versionType";

export interface CardAccessSelectFieldsResponse {
    cardAccess: CardAccess;
    version1: VersionType;
    messageId: string;
}