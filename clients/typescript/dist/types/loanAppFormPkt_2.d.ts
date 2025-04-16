import { LoanAppFormPktDefaultPrinter_2 } from "./loanAppFormPktDefaultPrinter_2";
import { LoanAppFormPktForcePrinting_2 } from "./loanAppFormPktForcePrinting_2";
import { LoanAppFormPktSpecfileName_2 } from "./loanAppFormPktSpecfileName_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFormPkt_2 {
    defaultPrinter: LoanAppFormPktDefaultPrinter_2[];
    defaultPrinterSpecified: boolean;
    description: string;
    forcePrinting: LoanAppFormPktForcePrinting_2[];
    forcePrintingSpecified: boolean;
    formPacketTypeValue: number;
    formPacketTypeValueSpecified: boolean;
    formPacketType: number | null;
    specfileName: LoanAppFormPktSpecfileName_2[];
    specfileNameSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
