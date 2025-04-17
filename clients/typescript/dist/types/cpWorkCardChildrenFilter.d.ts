import { CpWorkCardNoteFilter } from "./cpWorkCardNoteFilter";
import { CpWorkCardTrackingFilter } from "./cpWorkCardTrackingFilter";
import { VersionType } from "./versionType";
export interface CpWorkCardChildrenFilter {
    cpWorkCardNoteFilter: CpWorkCardNoteFilter;
    cpWorkCardTrackingFilter: CpWorkCardTrackingFilter;
    version1: VersionType;
}
