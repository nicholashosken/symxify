import { CpWorkCardNoteFilter } from "./cpWorkCardNoteFilter";
import { CpWorkCardTrackingFilter } from "./cpWorkCardTrackingFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CpWorkCardChildrenFilter {
    cpWorkCardNoteFilter: CpWorkCardNoteFilter;
    cpWorkCardTrackingFilter: CpWorkCardTrackingFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}