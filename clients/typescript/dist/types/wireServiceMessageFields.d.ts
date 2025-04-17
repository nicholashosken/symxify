import { VersionType } from "./versionType";
export interface WireServiceMessageFields {
    locator: boolean | null;
    text: number[];
    version1: VersionType;
}
