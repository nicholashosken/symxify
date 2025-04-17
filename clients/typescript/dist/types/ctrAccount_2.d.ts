import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrAccount_2 {
    accountNumber: string;
    lastFmDateValue: string | null;
    lastFmDateValueSpecified: boolean;
    lastFmDate: string | null;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    slId: string;
    slIdTypeValue: number;
    slIdTypeValueSpecified: boolean;
    slIdType: number | null;
    sourceValue: number;
    sourceValueSpecified: boolean;
    source: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
