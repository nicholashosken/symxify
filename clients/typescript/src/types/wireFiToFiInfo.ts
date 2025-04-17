import { WireFiToFiInfoText } from "./wireFiToFiInfoText";
import { VersionType } from "./versionType";

export interface WireFiToFiInfo {
    locator: number | null;
    text: WireFiToFiInfoText[];
    version1: VersionType;
}