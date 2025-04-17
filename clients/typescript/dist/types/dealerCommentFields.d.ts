import { VersionType } from "./versionType";
export interface DealerCommentFields {
    comment: boolean | null;
    effectiveDate: boolean | null;
    expirationDate: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    type: boolean | null;
    version1: VersionType;
}
