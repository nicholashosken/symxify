import { OnlineCard } from "./onlineCard";
import { VersionType } from "./versionType";
export interface OnlineCardSearchPagedSelectFieldsResponse {
    onlineCard: OnlineCard[];
    token: string;
    version1: VersionType;
    messageId: string;
}
