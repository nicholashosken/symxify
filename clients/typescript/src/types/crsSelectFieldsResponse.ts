import { Crs } from "./crs";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CrsSelectFieldsResponse {
    crs: Crs;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}