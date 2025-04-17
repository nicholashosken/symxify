import { VersionType } from "./versionType";
export interface SymXGeneralFields {
    customSpecfile: number[];
    ficsAppPassword: boolean | null;
    ficsAppUserId: boolean | null;
    ficsDataSourceName: boolean | null;
    ficsDbPassword: boolean | null;
    ficsDbUserId: boolean | null;
    instanceId: boolean | null;
    noticesPrinterType: boolean | null;
    specfileLoadMethod: number[];
    version1: VersionType;
}
