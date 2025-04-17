import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PrinterAdjustType {
    printerIdValue: number;
    printerIdValueSpecified: boolean;
    printerId: number | null;
    glCodeValue: number;
    glCodeValueSpecified: boolean;
    glCode: number | null;
    checkAcct: string;
    adjustCountValue: number;
    adjustCountValueSpecified: boolean;
    adjustCount: number | null;
    replenishCountValue: number;
    replenishCountValueSpecified: boolean;
    replenishCount: number | null;
    warnCountValue: number;
    warnCountValueSpecified: boolean;
    warnCount: number | null;
    resetPrinterValue: boolean;
    resetPrinterValueSpecified: boolean;
    resetPrinter: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
