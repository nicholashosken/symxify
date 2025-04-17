import { WireIntermedFiAdvText } from "./wireIntermedFiAdvText";
import { VersionType } from "./versionType";

export interface WireIntermedFiAdv {
    locator: number | null;
    text: WireIntermedFiAdvText[];
    version1: VersionType;
}