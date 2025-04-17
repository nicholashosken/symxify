import { VersionType } from "./versionType";
export interface InsTypeFields {
    consolidationCode: boolean | null;
    definedCode: boolean | null;
    disabilityInsuranceTable: boolean | null;
    insuranceType: boolean | null;
    lifeInsuranceTable: boolean | null;
    longDescription: boolean | null;
    maxDisDirectInsType: boolean | null;
    maxLifeDirectInsType: boolean | null;
    secondInsuredAsPrimeDis: boolean | null;
    secondInsuredAsPrimeLife: boolean | null;
    shortDescription: boolean | null;
    version1: VersionType;
}
