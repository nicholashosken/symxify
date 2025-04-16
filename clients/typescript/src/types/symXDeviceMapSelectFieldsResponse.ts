import { SymXDeviceMap } from "./symXDeviceMap";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXDeviceMapSelectFieldsResponse {
    symXDeviceMap: SymXDeviceMap;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}