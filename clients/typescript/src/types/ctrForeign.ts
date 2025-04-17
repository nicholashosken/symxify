import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrForeign {
    cashinValue: number;
    cashinValueSpecified: boolean;
    cashin: number | null;
    cashoutValue: number;
    cashoutValueSpecified: boolean;
    cashout: number | null;
    countryCode: string;
    lastFmDateValue: string;
    lastFmDateValueSpecified: boolean;
    lastFmDate: string | null;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}