import { VersionType } from "./versionType";

export interface IrsBkupWithholdFields {
    fedBackupWithholdingRate: boolean | null;
    futureFedBackupWhRate: boolean | null;
    futureFedEffectiveDate: boolean | null;
    version1: VersionType;
}