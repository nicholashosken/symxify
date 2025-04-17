import { WireInCmtCodeFields } from "./wireInCmtCodeFields";
import { VersionType } from "./versionType";

export interface WireInCmtCodeSelectableFields {
    includeAllWireInCmtCodeFields: boolean | null;
    wireInCmtCodeFields: WireInCmtCodeFields;
    version1: VersionType;
}