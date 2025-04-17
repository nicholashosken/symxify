import { VersionType } from "./versionType";
export interface EftAddendaInfoFields {
    info: number[];
    locator: boolean | null;
    recordChangeDate: boolean | null;
    type: boolean | null;
    version1: VersionType;
}
