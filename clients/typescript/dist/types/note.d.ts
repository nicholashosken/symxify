import { NoteText } from "./noteText";
import { VersionType } from "./versionType";
export interface Note {
    code: number | null;
    enterDate: string | null;
    enterTime: number | null;
    expirationDate: string | null;
    id: string;
    idType: number | null;
    locator: number | null;
    recordChangeDate: string | null;
    text: NoteText[];
    textLineCount: number | null;
    userId: number | null;
    voidFlag: number | null;
    voidedBy: number | null;
    version1: VersionType;
}
