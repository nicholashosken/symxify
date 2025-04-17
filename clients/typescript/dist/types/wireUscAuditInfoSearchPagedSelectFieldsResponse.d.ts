import { WireUscAuditInfo } from "./wireUscAuditInfo";
import { VersionType } from "./versionType";
export interface WireUscAuditInfoSearchPagedSelectFieldsResponse {
    wireUscAuditInfo: WireUscAuditInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}
