import { SymXGeneralCustomSpecfile_2 } from "./symXGeneralCustomSpecfile_2";
import { SymXGeneralSpecfileLoadMethod_2 } from "./symXGeneralSpecfileLoadMethod_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXGeneral_2 {
    customSpecfile: SymXGeneralCustomSpecfile_2[];
    customSpecfileSpecified: boolean;
    ficsAppPassword: string;
    ficsAppUserId: string;
    ficsDataSourceName: string;
    ficsDbPassword: string;
    ficsDbUserId: string;
    instanceIdValue: number;
    instanceIdValueSpecified: boolean;
    instanceId: number | null;
    noticesPrinterTypeValue: number;
    noticesPrinterTypeValueSpecified: boolean;
    noticesPrinterType: number | null;
    specfileLoadMethod: SymXGeneralSpecfileLoadMethod_2[];
    specfileLoadMethodSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
