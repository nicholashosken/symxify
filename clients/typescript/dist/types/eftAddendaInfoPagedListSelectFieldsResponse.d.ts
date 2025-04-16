import { EftAddendaInfo } from "./eftAddendaInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftAddendaInfoPagedListSelectFieldsResponse {
    eftAddendaInfo: EftAddendaInfo[];
    eftAddendaInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
