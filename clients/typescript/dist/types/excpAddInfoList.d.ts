import { ExcpAddInfo } from "./excpAddInfo";
export interface ExcpAddInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    excpAddInfo: ExcpAddInfo[];
    excpAddInfoSpecified: boolean;
}
