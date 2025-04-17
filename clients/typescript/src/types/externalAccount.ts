import { VersionType } from "./versionType";

export interface ExternalAccount {
    acctType: number | null;
    creationDate: string | null;
    expirationDate: string | null;
    financialInstitutionName: string;
    locator: number | null;
    number: string;
    preNoteSentDate: string | null;
    primaryAccountHolderName: string;
    recordChangeDate: string | null;
    rt: string;
    status: number | null;
    version1: VersionType;
}