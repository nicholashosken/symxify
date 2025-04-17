import { ExcpAddInfo } from "./excpAddInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpAddInfoSelectFieldsResponse {
    excpAddInfo: ExcpAddInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}