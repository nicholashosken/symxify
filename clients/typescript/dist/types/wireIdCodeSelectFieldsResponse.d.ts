import { WireIdCode } from "./wireIdCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIdCodeSelectFieldsResponse {
    wireIdCode: WireIdCode;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
