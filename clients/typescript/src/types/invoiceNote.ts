import { InvoiceNoteText } from "./invoiceNoteText";
import { VersionType } from "./versionType";

export interface InvoiceNote {
    code: number | null;
    enterDate: string | null;
    enterTime: number | null;
    expirationDate: string | null;
    id: string;
    idType: number | null;
    locator: number | null;
    recordChangeDate: string | null;
    text: InvoiceNoteText[];
    userId: number | null;
    voidFlag: number | null;
    voidedBy: number | null;
    version1: VersionType;
}