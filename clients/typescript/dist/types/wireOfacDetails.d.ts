import { WireOfacDetailsText } from "./wireOfacDetailsText";
import { VersionType } from "./versionType";
export interface WireOfacDetails {
    locator: number | null;
    text: WireOfacDetailsText[];
    version1: VersionType;
}
