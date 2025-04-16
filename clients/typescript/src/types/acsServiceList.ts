import { AcsService } from "./acsService";

export interface AcsServiceList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    acsService: AcsService[];
    acsServiceSpecified: boolean;
}