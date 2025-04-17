import { WireUscAuditInfoFields } from "./wireUscAuditInfoFields";
import { VersionType } from "./versionType";

export interface WireUscAuditInfoSingleSelectableFields {
    includeAllWireUscAuditInfoFields: boolean | null;
    wireUscAuditInfoFields: WireUscAuditInfoFields;
    version1: VersionType;
}