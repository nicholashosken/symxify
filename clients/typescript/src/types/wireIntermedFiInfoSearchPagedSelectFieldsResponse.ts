import { WireIntermedFiInfo } from "./wireIntermedFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireIntermedFiInfoSearchPagedSelectFieldsResponse {
    wireIntermedFiInfo: WireIntermedFiInfo[];
    wireIntermedFiInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}