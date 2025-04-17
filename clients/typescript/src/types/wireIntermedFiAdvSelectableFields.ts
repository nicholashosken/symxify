import { WireIntermedFiAdvFields } from "./wireIntermedFiAdvFields";
import { VersionType } from "./versionType";

export interface WireIntermedFiAdvSelectableFields {
    includeAllWireIntermedFiAdvFields: boolean | null;
    wireIntermedFiAdvFields: WireIntermedFiAdvFields;
    version1: VersionType;
}