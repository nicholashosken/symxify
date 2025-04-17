import { WireOutCmtCodeFields } from "./wireOutCmtCodeFields";
import { VersionType } from "./versionType";
export interface WireOutCmtCodeSingleSelectableFields {
    includeAllWireOutCmtCodeFields: boolean | null;
    wireOutCmtCodeFields: WireOutCmtCodeFields;
    version1: VersionType;
}
