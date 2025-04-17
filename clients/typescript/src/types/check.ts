import { CheckFmHistoryList } from "./checkFmHistoryList";
import { CheckPayee } from "./checkPayee";
import { VersionType } from "./versionType";

export interface Check {
    accountCode: string;
    accountNumber: string;
    amount: number | null;
    branch: number | null;
    checkFmHistoryList: CheckFmHistoryList;
    checkNumberAssigned: number | null;
    escheatDate: string | null;
    fmLastPurgeDate: string | null;
    globalSequence: number | null;
    globalSequenceDate: string | null;
    id: string;
    idType: number | null;
    issueDate: string | null;
    number: string;
    payee: CheckPayee[];
    postDate: string | null;
    reconciliationDate: string | null;
    recordChangeDate: string | null;
    reference: string;
    reference2: string;
    reference3: string;
    sequenceNumber: number | null;
    source: number | null;
    sourceGlCode: number | null;
    status: number | null;
    stopPmtDate: string | null;
    tracerNumber: string;
    voidDate: string | null;
    version1: VersionType;
}