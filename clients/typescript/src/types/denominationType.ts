import { StatusType } from "./statusType";
import { VersionType } from "./versionType";

export interface DenominationType {
    unit: number | null;
    count: number | null;
    status: StatusType | null;
    version1: VersionType;
}