import { UserFm } from "./userFm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserFmSelectFieldsResponse {
    userFm: UserFm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}