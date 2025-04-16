import { EftAddendaInfo } from "./eftAddendaInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftAddendaInfoSelectFieldsResponse {
    eftAddendaInfo: EftAddendaInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
