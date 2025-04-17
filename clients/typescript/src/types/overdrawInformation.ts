import { OverdrawProtectionEntry } from "./overdrawProtectionEntry";
import { VersionType } from "./versionType";

export interface OverdrawInformation {
    overdrawProtectionEntry: OverdrawProtectionEntry[];
    overdrawToleranceAmount: number | null;
    version1: VersionType;
}