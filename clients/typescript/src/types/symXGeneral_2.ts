import { SymXGeneralCustomSpecfile_2 } from "./symXGeneralCustomSpecfile_2";
import { SymXGeneralSpecfileLoadMethod_2 } from "./symXGeneralSpecfileLoadMethod_2";
import { VersionType } from "./versionType";

export interface SymXGeneral_2 {
    customSpecfile: SymXGeneralCustomSpecfile_2[];
    ficsAppPassword: string;
    ficsAppUserId: string;
    ficsDataSourceName: string;
    ficsDbPassword: string;
    ficsDbUserId: string;
    instanceId: number | null;
    noticesPrinterType: number | null;
    specfileLoadMethod: SymXGeneralSpecfileLoadMethod_2[];
    version1: VersionType;
}