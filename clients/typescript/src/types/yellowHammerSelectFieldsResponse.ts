import { YellowHammer } from "./yellowHammer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface YellowHammerSelectFieldsResponse {
    yellowHammer: YellowHammer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}