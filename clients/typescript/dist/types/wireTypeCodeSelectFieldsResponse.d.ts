import { WireTypeCode } from "./wireTypeCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireTypeCodeSelectFieldsResponse {
    wireTypeCode: WireTypeCode;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
