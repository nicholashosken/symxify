import { WireFiToFiInfoFields } from "./wireFiToFiInfoFields";
import { VersionType } from "./versionType";
export interface WireFiToFiInfoSingleSelectableFields {
    includeAllWireFiToFiInfoFields: boolean | null;
    wireFiToFiInfoFields: WireFiToFiInfoFields;
    version1: VersionType;
}
