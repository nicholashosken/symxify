import { VersionType } from "./versionType";

export interface InsType_2 {
    consolidationCode: number | null;
    definedCode: number | null;
    disabilityInsuranceTable: number | null;
    insuranceType: number | null;
    lifeInsuranceTable: number | null;
    longDescription: string;
    maxDisDirectInsType: number | null;
    maxLifeDirectInsType: number | null;
    secondInsuredAsPrimeDis: boolean | null;
    secondInsuredAsPrimeLife: boolean | null;
    shortDescription: string;
    version1: VersionType;
}