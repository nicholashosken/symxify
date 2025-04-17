import { CpWorkCardFields } from "./cpWorkCardFields";
import { VersionType } from "./versionType";
export interface CpWorkCardSingleSelectableFields {
    includeAllCpWorkCardFields: boolean | null;
    cpWorkCardFields: CpWorkCardFields;
    version1: VersionType;
}
