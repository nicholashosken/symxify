import { WireUscAuditInfoText } from "./wireUscAuditInfoText";
import { VersionType } from "./versionType";
export interface WireUscAuditInfo {
    locator: number | null;
    text: WireUscAuditInfoText[];
    version1: VersionType;
}
