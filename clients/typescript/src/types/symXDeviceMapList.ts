import { SymXDeviceMap } from "./symXDeviceMap";

export interface SymXDeviceMapList {
    hasReachedMaximumListSize: boolean | null;
    symXDeviceMap: SymXDeviceMap[];
}