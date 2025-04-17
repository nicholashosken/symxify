import { CpWorkCardNoteList } from "./cpWorkCardNoteList";
import { CpWorkCardTrackingList } from "./cpWorkCardTrackingList";
import { CpWorkCardSecCollectorId } from "./cpWorkCardSecCollectorId";
import { CpWorkCardSecPriority } from "./cpWorkCardSecPriority";
import { VersionType } from "./versionType";
export interface CpWorkCard {
    active: number | null;
    closeDate: string | null;
    cpWorkCardNoteList: CpWorkCardNoteList;
    cpWorkCardTrackingList: CpWorkCardTrackingList;
    fmLastDate: string | null;
    lastCollectorId: number | null;
    lastWorkDate: string | null;
    lastWorktime: number | null;
    locator: number | null;
    nextWorkDate: string | null;
    notePurgeDate: string | null;
    priority: string;
    recordChangeDate: string | null;
    secCollectorId: CpWorkCardSecCollectorId[];
    secPriority: CpWorkCardSecPriority[];
    type: number | null;
    version1: VersionType;
}
