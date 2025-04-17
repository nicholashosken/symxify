import { YellowHammerFields } from "./yellowHammerFields";
import { VersionType } from "./versionType";
export interface YellowHammerSingleSelectableFields {
    includeAllYellowHammerFields: boolean | null;
    yellowHammerFields: YellowHammerFields;
    version1: VersionType;
}
