import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisFields {
    cashAmtTotalValue: boolean;
    cashAmtTotalValueSpecified: boolean;
    cashAmtTotal: boolean | null;
    counter: number[];
    counterSpecified: boolean;
    locatorValue: boolean;
    locatorValueSpecified: boolean;
    locator: boolean | null;
    planValue: boolean;
    planValueSpecified: boolean;
    plan: boolean | null;
    recordChangeDateValue: boolean;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: boolean | null;
    statementDateValue: boolean;
    statementDateValueSpecified: boolean;
    statementDate: boolean | null;
    statementGroupValue: boolean;
    statementGroupValueSpecified: boolean;
    statementGroup: boolean | null;
    statementPrevDateValue: boolean;
    statementPrevDateValueSpecified: boolean;
    statementPrevDate: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}