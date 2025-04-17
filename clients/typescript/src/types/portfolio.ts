import { PortfolioHoldList } from "./portfolioHoldList";
import { PortfolioNoteList } from "./portfolioNoteList";
import { PortfolioTrackingList } from "./portfolioTrackingList";
import { VersionType } from "./versionType";

export interface Portfolio {
    availableBalance: number | null;
    balance: number | null;
    closeDate: string | null;
    description: string;
    fmLastDate: string | null;
    id: string;
    notePurgeDate: string | null;
    portfolioHoldList: PortfolioHoldList;
    portfolioNoteList: PortfolioNoteList;
    portfolioTrackingList: PortfolioTrackingList;
    recordChangeDate: string | null;
    version1: VersionType;
}