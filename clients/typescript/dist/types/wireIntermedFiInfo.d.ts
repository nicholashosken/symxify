import { WireIntermedFiInfoText } from "./wireIntermedFiInfoText";
import { VersionType } from "./versionType";
export interface WireIntermedFiInfo {
    locator: number | null;
    text: WireIntermedFiInfoText[];
    version1: VersionType;
}
