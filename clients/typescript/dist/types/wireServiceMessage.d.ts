import { WireServiceMessageText } from "./wireServiceMessageText";
import { VersionType } from "./versionType";
export interface WireServiceMessage {
    locator: number | null;
    text: WireServiceMessageText[];
    version1: VersionType;
}
