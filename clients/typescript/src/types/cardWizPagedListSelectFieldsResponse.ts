import { CardWiz } from "./cardWiz";
import { VersionType } from "./versionType";

export interface CardWizPagedListSelectFieldsResponse {
    cardWiz: CardWiz[];
    token: string;
    version1: VersionType;
    messageId: string;
}