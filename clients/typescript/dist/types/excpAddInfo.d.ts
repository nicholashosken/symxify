import { ExcpAddInfoAdditionInfo } from "./excpAddInfoAdditionInfo";
import { VersionType } from "./versionType";
export interface ExcpAddInfo {
    additionInfo: ExcpAddInfoAdditionInfo[];
    locator: number | null;
    number: number | null;
    version1: VersionType;
}
