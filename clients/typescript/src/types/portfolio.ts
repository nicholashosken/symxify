import { PortfolioHoldList } from "./portfolioHoldList";
import { PortfolioNoteList } from "./portfolioNoteList";
import { PortfolioTrackingList } from "./portfolioTrackingList";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Portfolio {
    availableBalanceValue: number;
    availableBalanceValueSpecified: boolean;
    availableBalance: number | null;
    balanceValue: number;
    balanceValueSpecified: boolean;
    balance: number | null;
    closeDateValue: string;
    closeDateValueSpecified: boolean;
    closeDate: string | null;
    description: string;
    fmLastDateValue: string;
    fmLastDateValueSpecified: boolean;
    fmLastDate: string | null;
    id: string;
    notePurgeDateValue: string;
    notePurgeDateValueSpecified: boolean;
    notePurgeDate: string | null;
    portfolioHoldList: PortfolioHoldList;
    portfolioNoteList: PortfolioNoteList;
    portfolioTrackingList: PortfolioTrackingList;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}