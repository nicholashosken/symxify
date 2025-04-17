import { EftAddendaInfo } from "./eftAddendaInfo";

export interface EftAddendaInfoList {
    hasReachedMaximumListSize: boolean | null;
    eftAddendaInfo: EftAddendaInfo[];
}