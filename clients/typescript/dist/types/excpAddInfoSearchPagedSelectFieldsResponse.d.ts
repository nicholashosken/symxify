import { ExcpAddInfo } from "./excpAddInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpAddInfoSearchPagedSelectFieldsResponse {
    excpAddInfo: ExcpAddInfo[];
    excpAddInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
