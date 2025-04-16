import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsBkupWithhold {
    fedBackupWithholdingRateValue: number;
    fedBackupWithholdingRateValueSpecified: boolean;
    fedBackupWithholdingRate: number | null;
    futureFedBackupWhRateValue: number;
    futureFedBackupWhRateValueSpecified: boolean;
    futureFedBackupWhRate: number | null;
    futureFedEffectiveDateValue: string;
    futureFedEffectiveDateValueSpecified: boolean;
    futureFedEffectiveDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}