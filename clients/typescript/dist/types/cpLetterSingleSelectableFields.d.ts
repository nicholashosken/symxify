import { CpLetterFields } from "./cpLetterFields";
import { VersionType } from "./versionType";
export interface CpLetterSingleSelectableFields {
    includeAllCpLetterFields: boolean | null;
    cpLetterFields: CpLetterFields;
    version1: VersionType;
}
