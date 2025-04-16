import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFormPktFields {
    defaultPrinter: number[];
    defaultPrinterSpecified: boolean;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    forcePrinting: number[];
    forcePrintingSpecified: boolean;
    formPacketTypeValue: boolean;
    formPacketTypeValueSpecified: boolean;
    formPacketType: boolean | null;
    specfileName: number[];
    specfileNameSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
