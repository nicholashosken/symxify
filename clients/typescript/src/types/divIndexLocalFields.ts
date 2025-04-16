import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DivIndexLocalFields {
    backdatedFlag: number[];
    backdatedFlagSpecified: boolean;
    balanceCutoff: number[];
    balanceCutoffSpecified: boolean;
    balanceStatus: number[];
    balanceStatusSpecified: boolean;
    currentMonthAvgRateValue: boolean;
    currentMonthAvgRateValueSpecified: boolean;
    currentMonthAvgRate: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    dividendIndexTableValue: boolean;
    dividendIndexTableValueSpecified: boolean;
    dividendIndexTable: boolean | null;
    inactiveStatusDateValue: boolean;
    inactiveStatusDateValueSpecified: boolean;
    inactiveStatusDate: boolean | null;
    indexDate: number[];
    indexDateSpecified: boolean;
    indexRate: number[];
    indexRateSpecified: boolean;
    pendingBalance: number[];
    pendingBalanceSpecified: boolean;
    pendingRate: number[];
    pendingRateSpecified: boolean;
    status: number[];
    statusSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}