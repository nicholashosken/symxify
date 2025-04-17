import { VersionType } from "./versionType";
export interface LookupFields {
    id: boolean | null;
    idType: boolean | null;
    locator: boolean | null;
    number: boolean | null;
    recordChangeDate: boolean | null;
    type: boolean | null;
    version1: VersionType;
}
