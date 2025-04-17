import { VersionType } from "./versionType";

export interface VendorFmHistory {
    accountNumber: string;
    batchSequence: number | null;
    branch: number | null;
    confirmationSeq: number | null;
    consoleNumber: number | null;
    dataType: number | null;
    fieldName: string;
    fieldNumber: number | null;
    fmType: number | null;
    id: string;
    idType: number | null;
    lastFmDate: string | null;
    newCharacter: string;
    newDate: string | null;
    newMoney: number | null;
    newNumber: number | null;
    newRate: number | null;
    oldCharacter: string;
    oldDate: string | null;
    oldMoney: number | null;
    oldNumber: number | null;
    oldRate: number | null;
    postDate: string | null;
    postTime: number | null;
    processorUser: number | null;
    recordName: string;
    recordType: number | null;
    securityLevels: number | null;
    sequenceNumber: number | null;
    subFieldNumber: number | null;
    userNumber: number | null;
    userOverride: number | null;
    version1: VersionType;
}