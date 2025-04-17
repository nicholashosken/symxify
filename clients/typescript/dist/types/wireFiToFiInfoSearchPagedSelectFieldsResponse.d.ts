import { WireFiToFiInfo } from "./wireFiToFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireFiToFiInfoSearchPagedSelectFieldsResponse {
    wireFiToFiInfo: WireFiToFiInfo[];
    wireFiToFiInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
