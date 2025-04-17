import { Card } from "./card";
import { VersionType } from "./versionType";

export interface CardSearchPagedSelectFieldsResponse {
    card: Card[];
    token: string;
    version1: VersionType;
    messageId: string;
}