import { VersionType } from "./versionType";
export interface DepositReportType {
    count: number | null;
    amount: number | null;
    glCode: number | null;
    glTranCount: number | null;
    version1: VersionType;
}
