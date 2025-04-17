import { WireFiToFiInfo } from "./wireFiToFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireFiToFiInfoSelectFieldsResponse {
    wireFiToFiInfo: WireFiToFiInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
