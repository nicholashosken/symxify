import { SymXDeviceMapFields } from "./symXDeviceMapFields";
import { VersionType } from "./versionType";
export interface SymXDeviceMapSelectableFields {
    includeAllSymXDeviceMapFields: boolean | null;
    symXDeviceMapFields: SymXDeviceMapFields;
    version1: VersionType;
}
