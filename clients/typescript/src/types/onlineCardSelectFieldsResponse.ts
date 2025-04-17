import { OnlineCard } from "./onlineCard";
import { VersionType } from "./versionType";

export interface OnlineCardSelectFieldsResponse {
    onlineCard: OnlineCard;
    version1: VersionType;
    messageId: string;
}