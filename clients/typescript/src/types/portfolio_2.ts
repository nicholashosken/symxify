import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Portfolio_2 {
    availableBalanceValue: number;
    availableBalanceValueSpecified: boolean;
    availableBalance: number | null;
    balanceValue: number;
    balanceValueSpecified: boolean;
    balance: number | null;
    closeDateValue: string | null;
    closeDateValueSpecified: boolean;
    closeDate: string | null;
    description: string;
    fmLastDateValue: string | null;
    fmLastDateValueSpecified: boolean;
    fmLastDate: string | null;
    id: string;
    notePurgeDateValue: string | null;
    notePurgeDateValueSpecified: boolean;
    notePurgeDate: string | null;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}