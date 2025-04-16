import { SymXDeviceMap } from "./symXDeviceMap";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXDeviceMapPagedListSelectFieldsResponse {
    symXDeviceMap: SymXDeviceMap[];
    symXDeviceMapSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}