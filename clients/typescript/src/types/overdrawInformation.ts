import { OverdrawProtectionEntry } from "./overdrawProtectionEntry";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OverdrawInformation {
    overdrawProtectionEntry: OverdrawProtectionEntry[];
    overdrawProtectionEntrySpecified: boolean;
    overdrawToleranceAmountValue: number;
    overdrawToleranceAmountValueSpecified: boolean;
    overdrawToleranceAmount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}