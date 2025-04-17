import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrPersonCtrTranInfoFields {
    accountNumberValue: boolean;
    accountNumberValueSpecified: boolean;
    accountNumber: boolean | null;
    amountValue: boolean;
    amountValueSpecified: boolean;
    amount: boolean | null;
    lastFmDateValue: boolean;
    lastFmDateValueSpecified: boolean;
    lastFmDate: boolean | null;
    locatorValue: boolean;
    locatorValueSpecified: boolean;
    locator: boolean | null;
    recordChangeDateValue: boolean;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: boolean | null;
    slIdValue: boolean;
    slIdValueSpecified: boolean;
    slId: boolean | null;
    slIdTypeValue: boolean;
    slIdTypeValueSpecified: boolean;
    slIdType: boolean | null;
    sourceValue: boolean;
    sourceValueSpecified: boolean;
    source: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}