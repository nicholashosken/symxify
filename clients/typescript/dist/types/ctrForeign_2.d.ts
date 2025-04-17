import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrForeign_2 {
    cashinValue: number;
    cashinValueSpecified: boolean;
    cashin: number | null;
    cashoutValue: number;
    cashoutValueSpecified: boolean;
    cashout: number | null;
    countryCode: string;
    lastFmDateValue: string | null;
    lastFmDateValueSpecified: boolean;
    lastFmDate: string | null;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
