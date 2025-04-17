import { WireUscAuditInfo } from "./wireUscAuditInfo";
import { VersionType } from "./versionType";

export interface WireUscAuditInfoSelectFieldsResponse {
    wireUscAuditInfo: WireUscAuditInfo;
    version1: VersionType;
    messageId: string;
}