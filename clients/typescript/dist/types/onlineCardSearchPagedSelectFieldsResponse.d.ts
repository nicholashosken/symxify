import { OnlineCard } from "./onlineCard";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineCardSearchPagedSelectFieldsResponse {
    onlineCard: OnlineCard[];
    onlineCardSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
