import { VersionType } from "./versionType";

export interface DealerComment {
    comment: string;
    effectiveDate: string | null;
    expirationDate: string | null;
    locator: number | null;
    recordChangeDate: string | null;
    type: number | null;
    version1: VersionType;
}