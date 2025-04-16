import { OverdrawProtectionEntrySourceType } from "./overdrawProtectionEntrySourceType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OverdrawProtectionEntry {
    sourceAccount: string;
    sourceId: string;
    sourceTypeValue: OverdrawProtectionEntrySourceType;
    sourceTypeValueSpecified: boolean;
    sourceType: OverdrawProtectionEntrySourceType | null;
    sourceAmountValue: number;
    sourceAmountValueSpecified: boolean;
    sourceAmount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    entryNumberValue: number;
    entryNumberValueSpecified: boolean;
    entryNumber: number | null;
}