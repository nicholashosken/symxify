import { CardDefault } from "./cardDefault";
import { VersionType } from "./versionType";
export interface CardDefaultPagedListSelectFieldsResponse {
    cardDefault: CardDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
