import { VersionType } from "./versionType";

export interface WireIntermedFiInfoFields {
    locator: boolean | null;
    text: number[];
    version1: VersionType;
}