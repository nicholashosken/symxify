import { WireUscAuditInfo } from "./wireUscAuditInfo";
export interface WireUscAuditInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireUscAuditInfo: WireUscAuditInfo[];
    wireUscAuditInfoSpecified: boolean;
}
