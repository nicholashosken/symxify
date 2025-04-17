import { SymXGeneralCustomSpecfile } from "./symXGeneralCustomSpecfile";
import { SymXGeneralSpecfileLoadMethod } from "./symXGeneralSpecfileLoadMethod";
import { VersionType } from "./versionType";

export interface SymXGeneral {
    customSpecfile: SymXGeneralCustomSpecfile[];
    ficsAppPassword: string;
    ficsAppUserId: string;
    ficsDataSourceName: string;
    ficsDbPassword: string;
    ficsDbUserId: string;
    instanceId: number | null;
    noticesPrinterType: number | null;
    specfileLoadMethod: SymXGeneralSpecfileLoadMethod[];
    version1: VersionType;
}