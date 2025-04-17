import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralCollHold {
    accountNumber: string;
    amountValue: number;
    amountValueSpecified: boolean;
    amount: number | null;
    effectiveDateValue: string;
    effectiveDateValueSpecified: boolean;
    effectiveDate: string | null;
    expirationDateValue: string;
    expirationDateValueSpecified: boolean;
    expirationDate: string | null;
    id: string;
    idTypeValue: number;
    idTypeValueSpecified: boolean;
    idType: number | null;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
