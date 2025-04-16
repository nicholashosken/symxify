import { EftAddendaInfo } from "./eftAddendaInfo";
export interface EftAddendaInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    eftAddendaInfo: EftAddendaInfo[];
    eftAddendaInfoSpecified: boolean;
}
