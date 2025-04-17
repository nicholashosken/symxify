import { LoanAppFormPktDefaultPrinter_2 } from "./loanAppFormPktDefaultPrinter_2";
import { LoanAppFormPktForcePrinting_2 } from "./loanAppFormPktForcePrinting_2";
import { LoanAppFormPktSpecfileName_2 } from "./loanAppFormPktSpecfileName_2";
import { VersionType } from "./versionType";

export interface LoanAppFormPkt_2 {
    defaultPrinter: LoanAppFormPktDefaultPrinter_2[];
    description: string;
    forcePrinting: LoanAppFormPktForcePrinting_2[];
    formPacketType: number | null;
    specfileName: LoanAppFormPktSpecfileName_2[];
    version1: VersionType;
}