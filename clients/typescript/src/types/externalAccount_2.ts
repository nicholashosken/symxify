import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalAccount_2 {
    acctTypeValue: number;
    acctTypeValueSpecified: boolean;
    acctType: number | null;
    creationDateValue: string | null;
    creationDateValueSpecified: boolean;
    creationDate: string | null;
    expirationDateValue: string | null;
    expirationDateValueSpecified: boolean;
    expirationDate: string | null;
    financialInstitutionName: string;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    number: string;
    preNoteSentDateValue: string | null;
    preNoteSentDateValueSpecified: boolean;
    preNoteSentDate: string | null;
    primaryAccountHolderName: string;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    rt: string;
    statusValue: number;
    statusValueSpecified: boolean;
    status: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}