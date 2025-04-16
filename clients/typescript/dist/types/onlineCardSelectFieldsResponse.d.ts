import { OnlineCard } from "./onlineCard";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineCardSelectFieldsResponse {
    onlineCard: OnlineCard;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
