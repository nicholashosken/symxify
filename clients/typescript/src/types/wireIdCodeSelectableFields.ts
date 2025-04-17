import { WireIdCodeFields } from "./wireIdCodeFields";
import { VersionType } from "./versionType";

export interface WireIdCodeSelectableFields {
    includeAllWireIdCodeFields: boolean | null;
    wireIdCodeFields: WireIdCodeFields;
    version1: VersionType;
}