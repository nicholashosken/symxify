import { InvoiceNoteText_2 } from "./invoiceNoteText_2";
import { VersionType } from "./versionType";

export interface InvoiceNote_2 {
    code: number | null;
    enterDate: string | null;
    enterTime: number | null;
    expirationDate: string | null;
    id: string;
    idType: number | null;
    locator: number | null;
    recordChangeDate: string | null;
    text: InvoiceNoteText_2[];
    userId: number | null;
    voidFlag: number | null;
    voidedBy: number | null;
    version1: VersionType;
}