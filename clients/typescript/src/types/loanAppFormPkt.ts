import { LoanAppFormPktDefaultPrinter } from "./loanAppFormPktDefaultPrinter";
import { LoanAppFormPktForcePrinting } from "./loanAppFormPktForcePrinting";
import { LoanAppFormPktSpecfileName } from "./loanAppFormPktSpecfileName";
import { VersionType } from "./versionType";

export interface LoanAppFormPkt {
    defaultPrinter: LoanAppFormPktDefaultPrinter[];
    description: string;
    forcePrinting: LoanAppFormPktForcePrinting[];
    formPacketType: number | null;
    specfileName: LoanAppFormPktSpecfileName[];
    version1: VersionType;
}