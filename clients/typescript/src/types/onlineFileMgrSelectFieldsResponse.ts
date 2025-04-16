import { OnlineFileMgr } from "./onlineFileMgr";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineFileMgrSelectFieldsResponse {
    onlineFileMgr: OnlineFileMgr;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}