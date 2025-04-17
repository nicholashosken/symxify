import { AcsService } from "./acsService";

export interface AcsServiceList {
    hasReachedMaximumListSize: boolean | null;
    acsService: AcsService[];
}