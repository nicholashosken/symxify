import { SymXDeviceMap } from "./symXDeviceMap";

export interface SymXDeviceMapList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    symXDeviceMap: SymXDeviceMap[];
    symXDeviceMapSpecified: boolean;
}