import { OnlineBlock } from "./onlineBlock";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineBlockSelectFieldsResponse {
    onlineBlock: OnlineBlock;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}