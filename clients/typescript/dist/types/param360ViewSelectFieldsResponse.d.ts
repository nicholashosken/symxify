import { Param360View } from "./param360View";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Param360ViewSelectFieldsResponse {
    param360View: Param360View;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
