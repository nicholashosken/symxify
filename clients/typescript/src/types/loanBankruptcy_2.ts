import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBankruptcy_2 {
    closeDateValue: string | null;
    closeDateValueSpecified: boolean;
    closeDate: string | null;
    description: string;
    effectDateValue: string | null;
    effectDateValueSpecified: boolean;
    effectDate: string | null;
    expireDateValue: string | null;
    expireDateValueSpecified: boolean;
    expireDate: string | null;
    id: string;
    openDateValue: string | null;
    openDateValueSpecified: boolean;
    openDate: string | null;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}