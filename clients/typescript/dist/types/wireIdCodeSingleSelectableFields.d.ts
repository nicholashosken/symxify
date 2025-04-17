import { WireIdCodeFields } from "./wireIdCodeFields";
import { VersionType } from "./versionType";
export interface WireIdCodeSingleSelectableFields {
    includeAllWireIdCodeFields: boolean | null;
    wireIdCodeFields: WireIdCodeFields;
    version1: VersionType;
}
