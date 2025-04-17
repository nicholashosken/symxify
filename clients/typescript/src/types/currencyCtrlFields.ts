import { VersionType } from "./versionType";

export interface CurrencyCtrlFields {
    buyRate: boolean | null;
    buyRateDescription: boolean | null;
    currencyDecimalPlaces: boolean | null;
    currencyMinimumUnits: boolean | null;
    currencyName: boolean | null;
    currencyShortName: boolean | null;
    fipsCountryCode: boolean | null;
    primeRate: boolean | null;
    primeRateDescription: boolean | null;
    sellRate: boolean | null;
    sellRateDescription: boolean | null;
    version1: VersionType;
}