import { CardName } from "./cardName";
import { VersionType } from "./versionType";
export interface CardNameSelectFieldsResponse {
    cardName: CardName;
    version1: VersionType;
    messageId: string;
}
