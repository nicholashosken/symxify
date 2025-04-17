import { Card } from "./card";
import { VersionType } from "./versionType";

export interface CardSelectFieldsResponse {
    card: Card;
    version1: VersionType;
    messageId: string;
}