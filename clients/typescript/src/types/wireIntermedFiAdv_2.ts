import { WireIntermedFiAdvText_2 } from "./wireIntermedFiAdvText_2";
import { VersionType } from "./versionType";

export interface WireIntermedFiAdv_2 {
    locator: number | null;
    text: WireIntermedFiAdvText_2[];
    version1: VersionType;
}