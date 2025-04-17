import { WireOutCmtCodeFields } from "./wireOutCmtCodeFields";
import { VersionType } from "./versionType";

export interface WireOutCmtCodeSelectableFields {
    includeAllWireOutCmtCodeFields: boolean | null;
    wireOutCmtCodeFields: WireOutCmtCodeFields;
    version1: VersionType;
}