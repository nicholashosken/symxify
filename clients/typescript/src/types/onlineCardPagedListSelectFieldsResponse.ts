import { OnlineCard } from "./onlineCard";
import { VersionType } from "./versionType";

export interface OnlineCardPagedListSelectFieldsResponse {
    onlineCard: OnlineCard[];
    token: string;
    version1: VersionType;
    messageId: string;
}