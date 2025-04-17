import { EftAddendaInfoInfo_2 } from "./eftAddendaInfoInfo_2";
import { VersionType } from "./versionType";
export interface EftAddendaInfo_2 {
    info: EftAddendaInfoInfo_2[];
    locator: number | null;
    recordChangeDate: string | null;
    type: number | null;
    version1: VersionType;
}
