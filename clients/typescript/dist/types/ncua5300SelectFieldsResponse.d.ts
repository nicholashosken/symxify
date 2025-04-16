import { Ncua5300 } from "./ncua5300";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Ncua5300SelectFieldsResponse {
    ncua5300: Ncua5300;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
