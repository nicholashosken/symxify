import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralCollHoldFields {
    accountNumberValue: boolean;
    accountNumberValueSpecified: boolean;
    accountNumber: boolean | null;
    amountValue: boolean;
    amountValueSpecified: boolean;
    amount: boolean | null;
    effectiveDateValue: boolean;
    effectiveDateValueSpecified: boolean;
    effectiveDate: boolean | null;
    expirationDateValue: boolean;
    expirationDateValueSpecified: boolean;
    expirationDate: boolean | null;
    idValue: boolean;
    idValueSpecified: boolean;
    id: boolean | null;
    idTypeValue: boolean;
    idTypeValueSpecified: boolean;
    idType: boolean | null;
    locatorValue: boolean;
    locatorValueSpecified: boolean;
    locator: boolean | null;
    recordChangeDateValue: boolean;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}