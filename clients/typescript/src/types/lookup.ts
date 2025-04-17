import { VersionType } from "./versionType";

export interface Lookup {
    id: string;
    idType: number | null;
    locator: number | null;
    number: string;
    recordChangeDate: string | null;
    type: number | null;
    version1: VersionType;
}