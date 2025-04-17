import { DocumentNumberCheck_2 } from "./documentNumberCheck_2";
import { VersionType } from "./versionType";
export interface DocumentNumber_2 {
    certificate: number | null;
    check: DocumentNumberCheck_2[];
    receipt: number | null;
    version1: VersionType;
}
