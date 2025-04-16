import { ConsoleFm } from "./consoleFm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ConsoleFmSelectFieldsResponse {
    consoleFm: ConsoleFm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
