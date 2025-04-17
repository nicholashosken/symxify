import { VersionType } from "./versionType";
export interface IrsBkupWithhold {
    fedBackupWithholdingRate: number | null;
    futureFedBackupWhRate: number | null;
    futureFedEffectiveDate: string | null;
    version1: VersionType;
}
