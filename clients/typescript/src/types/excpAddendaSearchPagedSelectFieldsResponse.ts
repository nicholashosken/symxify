import { ExcpAddenda } from "./excpAddenda";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpAddendaSearchPagedSelectFieldsResponse {
    excpAddenda: ExcpAddenda[];
    excpAddendaSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}