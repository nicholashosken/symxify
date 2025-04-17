import { VersionType } from "./versionType";

export interface CardNoteFields {
    code: boolean | null;
    enterDate: boolean | null;
    enterTime: boolean | null;
    expirationDate: boolean | null;
    id: boolean | null;
    idType: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    text: number[];
    textLineCount: boolean | null;
    userId: boolean | null;
    voidFlag: boolean | null;
    voidedBy: boolean | null;
    version1: VersionType;
}