import { WireServiceMessage } from "./wireServiceMessage";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireServiceMessageSelectFieldsResponse {
    wireServiceMessage: WireServiceMessage;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
