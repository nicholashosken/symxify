import { DocumentNumberCheck } from "./documentNumberCheck";
import { VersionType } from "./versionType";
export interface DocumentNumber {
    certificate: number | null;
    check: DocumentNumberCheck[];
    receipt: number | null;
    version1: VersionType;
}
