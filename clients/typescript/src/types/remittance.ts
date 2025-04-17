import { VersionType } from "./versionType";

export interface Remittance {
    amount: number | null;
    confirmationNumber: string;
    confirmationSeq: number | null;
    consoleNumber: number | null;
    description: string;
    fundType: number | null;
    glCode: number | null;
    globalSequence: number | null;
    globalSequenceDate: string | null;
    memberAccount: string;
    payer: number | null;
    postDate: string | null;
    prevDueDate: string | null;
    processorAcct: string;
    processorCode: number | null;
    reconDate: string | null;
    recordChangeDate: string | null;
    remitDate: string | null;
    sequence: number | null;
    status: number | null;
    tranCode: string;
    tranType: number | null;
    user: number | null;
    voidDate: string | null;
    version1: VersionType;
}