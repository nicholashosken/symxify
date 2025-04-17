import { YellowHammerFields } from "./yellowHammerFields";
import { VersionType } from "./versionType";

export interface YellowHammerSelectableFields {
    includeAllYellowHammerFields: boolean | null;
    yellowHammerFields: YellowHammerFields;
    version1: VersionType;
}