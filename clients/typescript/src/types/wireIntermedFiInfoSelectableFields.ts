import { WireIntermedFiInfoFields } from "./wireIntermedFiInfoFields";
import { VersionType } from "./versionType";

export interface WireIntermedFiInfoSelectableFields {
    includeAllWireIntermedFiInfoFields: boolean | null;
    wireIntermedFiInfoFields: WireIntermedFiInfoFields;
    version1: VersionType;
}