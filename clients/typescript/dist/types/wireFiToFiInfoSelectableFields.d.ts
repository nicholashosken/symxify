import { WireFiToFiInfoFields } from "./wireFiToFiInfoFields";
import { VersionType } from "./versionType";
export interface WireFiToFiInfoSelectableFields {
    includeAllWireFiToFiInfoFields: boolean | null;
    wireFiToFiInfoFields: WireFiToFiInfoFields;
    version1: VersionType;
}
