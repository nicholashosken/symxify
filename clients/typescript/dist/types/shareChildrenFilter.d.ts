import { ShareAnalysisFilter } from "./shareAnalysisFilter";
import { ShareAnalysisGroupFilter } from "./shareAnalysisGroupFilter";
import { ShareAnalysisPlanFilter } from "./shareAnalysisPlanFilter";
import { ShareCheckOrderFilter } from "./shareCheckOrderFilter";
import { ShareHoldFilter } from "./shareHoldFilter";
import { ShareNameFilter } from "./shareNameFilter";
import { ShareNoteFilter } from "./shareNoteFilter";
import { ShareTrackingFilter } from "./shareTrackingFilter";
import { ShareTransactionFilter } from "./shareTransactionFilter";
import { ShareTransferFilter } from "./shareTransferFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareChildrenFilter {
    shareAnalysisFilter: ShareAnalysisFilter;
    shareAnalysisGroupFilter: ShareAnalysisGroupFilter;
    shareAnalysisPlanFilter: ShareAnalysisPlanFilter;
    shareCheckOrderFilter: ShareCheckOrderFilter;
    shareHoldFilter: ShareHoldFilter;
    shareNameFilter: ShareNameFilter;
    shareNoteFilter: ShareNoteFilter;
    shareTrackingFilter: ShareTrackingFilter;
    shareTransactionFilter: ShareTransactionFilter;
    shareTransferFilter: ShareTransferFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
