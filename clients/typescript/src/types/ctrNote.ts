import { CtrNoteText } from "./ctrNoteText";
import { VersionType } from "./versionType";

export interface CtrNote {
    code: number | null;
    enterDate: string | null;
    enterTime: number | null;
    expirationDate: string | null;
    id: string;
    idType: number | null;
    locator: number | null;
    recordChangeDate: string | null;
    text: CtrNoteText[];
    textLineCount: number | null;
    userId: number | null;
    voidFlag: number | null;
    voidedBy: number | null;
    version1: VersionType;
}