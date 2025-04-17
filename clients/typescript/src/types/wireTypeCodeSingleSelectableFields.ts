import { WireTypeCodeFields } from "./wireTypeCodeFields";
import { VersionType } from "./versionType";

export interface WireTypeCodeSingleSelectableFields {
    includeAllWireTypeCodeFields: boolean | null;
    wireTypeCodeFields: WireTypeCodeFields;
    version1: VersionType;
}