import { ExcpAddenda } from "./excpAddenda";
import { VersionType } from "./versionType";
export interface ExcpAddendaSelectFieldsResponse {
    excpAddenda: ExcpAddenda;
    version1: VersionType;
    messageId: string;
}
