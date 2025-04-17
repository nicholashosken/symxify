import { PayCalcFields } from "./payCalcFields";
import { VersionType } from "./versionType";

export interface PayCalcSingleSelectableFields {
    includeAllPayCalcFields: boolean | null;
    payCalcFields: PayCalcFields;
    version1: VersionType;
}