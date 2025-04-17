import { VersionType } from "./versionType";
export interface CommentFields {
    effectiveDate: boolean | null;
    expirationDate: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    text: boolean | null;
    type: boolean | null;
    version1: VersionType;
}
