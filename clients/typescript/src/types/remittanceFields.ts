import { VersionType } from "./versionType";

export interface RemittanceFields {
    amount: boolean | null;
    confirmationNumber: boolean | null;
    confirmationSeq: boolean | null;
    consoleNumber: boolean | null;
    description: boolean | null;
    fundType: boolean | null;
    glCode: boolean | null;
    globalSequence: boolean | null;
    globalSequenceDate: boolean | null;
    memberAccount: boolean | null;
    payer: boolean | null;
    postDate: boolean | null;
    prevDueDate: boolean | null;
    processorAcct: boolean | null;
    processorCode: boolean | null;
    reconDate: boolean | null;
    recordChangeDate: boolean | null;
    remitDate: boolean | null;
    sequence: boolean | null;
    status: boolean | null;
    tranCode: boolean | null;
    tranType: boolean | null;
    user: boolean | null;
    voidDate: boolean | null;
    version1: VersionType;
}