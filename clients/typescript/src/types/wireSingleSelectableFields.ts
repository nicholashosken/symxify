import { WireFields } from "./wireFields";
import { VersionType } from "./versionType";

export interface WireSingleSelectableFields {
    includeAllWireFields: boolean | null;
    wireFields: WireFields;
    version1: VersionType;
}