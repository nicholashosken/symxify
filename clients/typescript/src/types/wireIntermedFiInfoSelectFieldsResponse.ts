import { WireIntermedFiInfo } from "./wireIntermedFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireIntermedFiInfoSelectFieldsResponse {
    wireIntermedFiInfo: WireIntermedFiInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}