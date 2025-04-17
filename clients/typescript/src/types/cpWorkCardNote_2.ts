import { CpWorkCardNoteText_2 } from "./cpWorkCardNoteText_2";
import { VersionType } from "./versionType";

export interface CpWorkCardNote_2 {
    code: number | null;
    enterDate: string | null;
    enterTime: number | null;
    expirationDate: string | null;
    id: string;
    idType: number | null;
    locator: number | null;
    recordChangeDate: string | null;
    text: CpWorkCardNoteText_2[];
    textLineCount: number | null;
    userId: number | null;
    voidFlag: number | null;
    voidedBy: number | null;
    version1: VersionType;
}