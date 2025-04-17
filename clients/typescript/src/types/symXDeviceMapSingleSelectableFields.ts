import { SymXDeviceMapFields } from "./symXDeviceMapFields";
import { VersionType } from "./versionType";

export interface SymXDeviceMapSingleSelectableFields {
    includeAllSymXDeviceMapFields: boolean | null;
    symXDeviceMapFields: SymXDeviceMapFields;
    version1: VersionType;
}