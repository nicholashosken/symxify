import { CtrAccountFilter } from "./ctrAccountFilter";
import { CtrBranchFilter } from "./ctrBranchFilter";
import { CtrFmHistoryFilter } from "./ctrFmHistoryFilter";
import { CtrForeignFilter } from "./ctrForeignFilter";
import { CtrNoteFilter } from "./ctrNoteFilter";
import { CtrPersonFilter } from "./ctrPersonFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrChildrenFilter {
    ctrAccountFilter: CtrAccountFilter;
    ctrBranchFilter: CtrBranchFilter;
    ctrFmHistoryFilter: CtrFmHistoryFilter;
    ctrForeignFilter: CtrForeignFilter;
    ctrNoteFilter: CtrNoteFilter;
    ctrPersonFilter: CtrPersonFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}