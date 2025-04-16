import { RegCc } from "./regCc";

export interface RegCcList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    regCc: RegCc[];
    regCcSpecified: boolean;
}