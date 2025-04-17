import { WireServiceMessageText_2 } from "./wireServiceMessageText_2";
import { VersionType } from "./versionType";

export interface WireServiceMessage_2 {
    locator: number | null;
    text: WireServiceMessageText_2[];
    version1: VersionType;
}