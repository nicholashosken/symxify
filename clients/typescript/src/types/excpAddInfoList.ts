import { ExcpAddInfo } from "./excpAddInfo";

export interface ExcpAddInfoList {
    hasReachedMaximumListSize: boolean | null;
    excpAddInfo: ExcpAddInfo[];
}