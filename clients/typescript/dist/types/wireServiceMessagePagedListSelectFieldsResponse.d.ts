import { WireServiceMessage } from "./wireServiceMessage";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireServiceMessagePagedListSelectFieldsResponse {
    wireServiceMessage: WireServiceMessage[];
    wireServiceMessageSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
