import { Misc } from "./misc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MiscSelectFieldsResponse {
    misc: Misc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}