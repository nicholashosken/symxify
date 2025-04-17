import { EftAddendaInfo } from "./eftAddendaInfo";
import { VersionType } from "./versionType";

export interface EftAddendaInfoSearchPagedSelectFieldsResponse {
    eftAddendaInfo: EftAddendaInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}