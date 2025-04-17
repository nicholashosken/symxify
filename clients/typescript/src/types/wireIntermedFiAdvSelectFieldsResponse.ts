import { WireIntermedFiAdv } from "./wireIntermedFiAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireIntermedFiAdvSelectFieldsResponse {
    wireIntermedFiAdv: WireIntermedFiAdv;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}