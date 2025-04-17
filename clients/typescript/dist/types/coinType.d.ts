import { StatusType } from "./statusType";
import { VersionType } from "./versionType";
export interface CoinType {
    value: number | null;
    status: StatusType | null;
    version1: VersionType;
}
