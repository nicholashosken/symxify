import { SymXDeviceMap } from "./symXDeviceMap";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXDeviceMapSearchPagedSelectFieldsResponse {
    symXDeviceMap: SymXDeviceMap[];
    symXDeviceMapSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
