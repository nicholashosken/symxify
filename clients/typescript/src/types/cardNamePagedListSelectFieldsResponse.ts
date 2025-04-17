import { CardName } from "./cardName";
import { VersionType } from "./versionType";

export interface CardNamePagedListSelectFieldsResponse {
    cardName: CardName[];
    token: string;
    version1: VersionType;
    messageId: string;
}