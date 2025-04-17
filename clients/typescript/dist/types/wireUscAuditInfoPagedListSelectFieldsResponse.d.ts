import { WireUscAuditInfo } from "./wireUscAuditInfo";
import { VersionType } from "./versionType";
export interface WireUscAuditInfoPagedListSelectFieldsResponse {
    wireUscAuditInfo: WireUscAuditInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}
