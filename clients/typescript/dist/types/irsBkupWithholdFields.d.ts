import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IrsBkupWithholdFields {
    fedBackupWithholdingRateValue: boolean;
    fedBackupWithholdingRateValueSpecified: boolean;
    fedBackupWithholdingRate: boolean | null;
    futureFedBackupWhRateValue: boolean;
    futureFedBackupWhRateValueSpecified: boolean;
    futureFedBackupWhRate: boolean | null;
    futureFedEffectiveDateValue: boolean;
    futureFedEffectiveDateValueSpecified: boolean;
    futureFedEffectiveDate: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
