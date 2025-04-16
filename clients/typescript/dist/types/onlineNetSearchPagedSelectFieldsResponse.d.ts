import { OnlineNet } from "./onlineNet";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineNetSearchPagedSelectFieldsResponse {
    onlineNet: OnlineNet[];
    onlineNetSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
