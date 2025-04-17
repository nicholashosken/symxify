import { WireReceiverFiInfoText } from "./wireReceiverFiInfoText";
import { VersionType } from "./versionType";

export interface WireReceiverFiInfo {
    locator: number | null;
    text: WireReceiverFiInfoText[];
    version1: VersionType;
}