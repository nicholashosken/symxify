import { WireUscAuditInfoText_2 } from "./wireUscAuditInfoText_2";
import { VersionType } from "./versionType";

export interface WireUscAuditInfo_2 {
    locator: number | null;
    text: WireUscAuditInfoText_2[];
    version1: VersionType;
}