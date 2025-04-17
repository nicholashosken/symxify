import { PayCalcFields } from "./payCalcFields";
import { VersionType } from "./versionType";

export interface PayCalcSelectableFields {
    includeAllPayCalcFields: boolean | null;
    payCalcFields: PayCalcFields;
    version1: VersionType;
}