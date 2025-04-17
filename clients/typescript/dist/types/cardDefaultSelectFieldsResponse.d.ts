import { CardDefault } from "./cardDefault";
import { VersionType } from "./versionType";
export interface CardDefaultSelectFieldsResponse {
    cardDefault: CardDefault;
    version1: VersionType;
    messageId: string;
}
