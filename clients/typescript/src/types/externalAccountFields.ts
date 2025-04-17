import { VersionType } from "./versionType";

export interface ExternalAccountFields {
    acctType: boolean | null;
    creationDate: boolean | null;
    expirationDate: boolean | null;
    financialInstitutionName: boolean | null;
    locator: boolean | null;
    number: boolean | null;
    preNoteSentDate: boolean | null;
    primaryAccountHolderName: boolean | null;
    recordChangeDate: boolean | null;
    rt: boolean | null;
    status: boolean | null;
    version1: VersionType;
}