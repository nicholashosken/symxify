import { CpWorkCardFields } from "./cpWorkCardFields";
import { CpWorkCardNoteSelectableFields } from "./cpWorkCardNoteSelectableFields";
import { CpWorkCardTrackingSelectableFields } from "./cpWorkCardTrackingSelectableFields";
import { VersionType } from "./versionType";
export interface CpWorkCardSelectableFields {
    includeAllCpWorkCardFields: boolean | null;
    cpWorkCardFields: CpWorkCardFields;
    cpWorkCardNoteSelectableFields: CpWorkCardNoteSelectableFields;
    cpWorkCardTrackingSelectableFields: CpWorkCardTrackingSelectableFields;
    version1: VersionType;
}
