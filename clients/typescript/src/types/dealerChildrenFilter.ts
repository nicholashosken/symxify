import { DealerCommentFilter } from "./dealerCommentFilter";
import { DealerFmHistoryFilter } from "./dealerFmHistoryFilter";
import { DealerNoteFilter } from "./dealerNoteFilter";
import { DealerTrackingFilter } from "./dealerTrackingFilter";
import { ReservePlanFilter } from "./reservePlanFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerChildrenFilter {
    dealerCommentFilter: DealerCommentFilter;
    dealerFmHistoryFilter: DealerFmHistoryFilter;
    dealerNoteFilter: DealerNoteFilter;
    dealerTrackingFilter: DealerTrackingFilter;
    reservePlanFilter: ReservePlanFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}