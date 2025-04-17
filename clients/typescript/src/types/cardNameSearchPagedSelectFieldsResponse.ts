import { CardName } from "./cardName";
import { VersionType } from "./versionType";

export interface CardNameSearchPagedSelectFieldsResponse {
    cardName: CardName[];
    token: string;
    version1: VersionType;
    messageId: string;
}