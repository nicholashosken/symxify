import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrForeignFields {
    cashinValue: boolean;
    cashinValueSpecified: boolean;
    cashin: boolean | null;
    cashoutValue: boolean;
    cashoutValueSpecified: boolean;
    cashout: boolean | null;
    countryCodeValue: boolean;
    countryCodeValueSpecified: boolean;
    countryCode: boolean | null;
    lastFmDateValue: boolean;
    lastFmDateValueSpecified: boolean;
    lastFmDate: boolean | null;
    locatorValue: boolean;
    locatorValueSpecified: boolean;
    locator: boolean | null;
    recordChangeDateValue: boolean;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}