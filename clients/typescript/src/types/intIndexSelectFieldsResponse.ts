import { IntIndex } from "./intIndex";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IntIndexSelectFieldsResponse {
    intIndex: IntIndex;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}