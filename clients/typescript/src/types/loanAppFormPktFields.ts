import { VersionType } from "./versionType";

export interface LoanAppFormPktFields {
    defaultPrinter: number[];
    description: boolean | null;
    forcePrinting: number[];
    formPacketType: boolean | null;
    specfileName: number[];
    version1: VersionType;
}