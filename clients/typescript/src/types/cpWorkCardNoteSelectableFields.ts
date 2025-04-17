import { CpWorkCardNoteFields } from "./cpWorkCardNoteFields";
import { VersionType } from "./versionType";

export interface CpWorkCardNoteSelectableFields {
    includeAllCpWorkCardNoteFields: boolean | null;
    cpWorkCardNoteFields: CpWorkCardNoteFields;
    version1: VersionType;
}