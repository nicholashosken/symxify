import { LoanAppFormPktDefaultPrinter } from "./loanAppFormPktDefaultPrinter";
import { LoanAppFormPktForcePrinting } from "./loanAppFormPktForcePrinting";
import { LoanAppFormPktSpecfileName } from "./loanAppFormPktSpecfileName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFormPkt {
    defaultPrinter: LoanAppFormPktDefaultPrinter[];
    defaultPrinterSpecified: boolean;
    description: string;
    forcePrinting: LoanAppFormPktForcePrinting[];
    forcePrintingSpecified: boolean;
    formPacketTypeValue: number;
    formPacketTypeValueSpecified: boolean;
    formPacketType: number | null;
    specfileName: LoanAppFormPktSpecfileName[];
    specfileNameSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
