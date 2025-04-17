import { CardWiz } from "./cardWiz";
import { VersionType } from "./versionType";
export interface CardWizSearchPagedSelectFieldsResponse {
    cardWiz: CardWiz[];
    token: string;
    version1: VersionType;
    messageId: string;
}
