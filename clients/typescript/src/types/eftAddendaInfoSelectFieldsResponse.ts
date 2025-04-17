import { EftAddendaInfo } from "./eftAddendaInfo";
import { VersionType } from "./versionType";

export interface EftAddendaInfoSelectFieldsResponse {
    eftAddendaInfo: EftAddendaInfo;
    version1: VersionType;
    messageId: string;
}