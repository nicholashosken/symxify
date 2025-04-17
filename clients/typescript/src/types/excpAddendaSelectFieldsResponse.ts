import { ExcpAddenda } from "./excpAddenda";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpAddendaSelectFieldsResponse {
    excpAddenda: ExcpAddenda;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}