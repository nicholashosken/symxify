import { MoProductFields } from "./moProductFields";
import { VersionType } from "./versionType";
export interface MoProductSelectableFields {
    includeAllMoProductFields: boolean | null;
    moProductFields: MoProductFields;
    version1: VersionType;
}
