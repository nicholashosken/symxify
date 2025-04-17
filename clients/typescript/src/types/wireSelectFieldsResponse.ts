import { Wire } from "./wire";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireSelectFieldsResponse {
    wire: Wire;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}