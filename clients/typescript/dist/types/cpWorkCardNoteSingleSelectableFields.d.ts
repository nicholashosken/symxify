import { CpWorkCardNoteFields } from "./cpWorkCardNoteFields";
import { VersionType } from "./versionType";
export interface CpWorkCardNoteSingleSelectableFields {
    includeAllCpWorkCardNoteFields: boolean | null;
    cpWorkCardNoteFields: CpWorkCardNoteFields;
    version1: VersionType;
}
