import { OverdrawProtectionEntrySourceType } from "./overdrawProtectionEntrySourceType";
import { VersionType } from "./versionType";
export interface OverdrawProtectionEntry {
    sourceAccount: string;
    sourceId: string;
    sourceType: OverdrawProtectionEntrySourceType | null;
    sourceAmount: number | null;
    version1: VersionType;
    entryNumber: number | null;
}
