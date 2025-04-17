import { Card } from "./card";
import { VersionType } from "./versionType";
export interface CardPagedListSelectFieldsResponse {
    card: Card[];
    token: string;
    version1: VersionType;
    messageId: string;
}
