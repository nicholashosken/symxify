import { EftAddendaInfoInfo } from "./eftAddendaInfoInfo";
import { VersionType } from "./versionType";

export interface EftAddendaInfo {
    info: EftAddendaInfoInfo[];
    locator: number | null;
    recordChangeDate: string | null;
    type: number | null;
    version1: VersionType;
}