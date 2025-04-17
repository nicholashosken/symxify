import { MoProductFields } from "./moProductFields";
import { VersionType } from "./versionType";

export interface MoProductSingleSelectableFields {
    includeAllMoProductFields: boolean | null;
    moProductFields: MoProductFields;
    version1: VersionType;
}