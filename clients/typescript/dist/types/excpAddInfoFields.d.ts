import { VersionType } from "./versionType";
export interface ExcpAddInfoFields {
    additionInfo: number[];
    locator: boolean | null;
    number: boolean | null;
    version1: VersionType;
}
