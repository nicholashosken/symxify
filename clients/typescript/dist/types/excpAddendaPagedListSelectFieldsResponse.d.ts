import { ExcpAddenda } from "./excpAddenda";
import { VersionType } from "./versionType";
export interface ExcpAddendaPagedListSelectFieldsResponse {
    excpAddenda: ExcpAddenda[];
    token: string;
    version1: VersionType;
    messageId: string;
}
