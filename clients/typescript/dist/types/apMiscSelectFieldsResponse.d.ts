import { ApMisc } from "./apMisc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ApMiscSelectFieldsResponse {
    apMisc: ApMisc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
