import { Card } from "./card";
import { VersionType } from "./versionType";
export interface CardSelectFieldsFilterChildrenResponse {
    card: Card;
    version1: VersionType;
    messageId: string;
}
