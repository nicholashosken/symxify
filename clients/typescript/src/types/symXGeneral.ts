import { SymXGeneralCustomSpecfile } from "./symXGeneralCustomSpecfile";
import { SymXGeneralSpecfileLoadMethod } from "./symXGeneralSpecfileLoadMethod";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXGeneral {
    customSpecfile: SymXGeneralCustomSpecfile[];
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
    specfileLoadMethod: SymXGeneralSpecfileLoadMethod[];
    specfileLoadMethodSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}