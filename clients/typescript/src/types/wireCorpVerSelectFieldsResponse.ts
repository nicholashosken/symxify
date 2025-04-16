import { WireCorpVer } from "./wireCorpVer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireCorpVerSelectFieldsResponse {
    wireCorpVer: WireCorpVer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}