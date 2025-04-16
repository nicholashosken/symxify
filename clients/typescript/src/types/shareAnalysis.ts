import { ShareAnalysisCounter } from "./shareAnalysisCounter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysis {
    cashAmtTotalValue: number;
    cashAmtTotalValueSpecified: boolean;
    cashAmtTotal: number | null;
    counter: ShareAnalysisCounter[];
    counterSpecified: boolean;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    planValue: number;
    planValueSpecified: boolean;
    plan: number | null;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    statementDateValue: string;
    statementDateValueSpecified: boolean;
    statementDate: string | null;
    statementGroupValue: number;
    statementGroupValueSpecified: boolean;
    statementGroup: number | null;
    statementPrevDateValue: string;
    statementPrevDateValueSpecified: boolean;
    statementPrevDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}