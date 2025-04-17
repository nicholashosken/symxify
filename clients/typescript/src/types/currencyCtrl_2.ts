import { VersionType } from "./versionType";

export interface CurrencyCtrl_2 {
    buyRate: string;
    buyRateDescription: string;
    currencyDecimalPlaces: number | null;
    currencyMinimumUnits: number | null;
    currencyName: string;
    currencyShortName: string;
    fipsCountryCode: string;
    primeRate: string;
    primeRateDescription: string;
    sellRate: string;
    sellRateDescription: string;
    version1: VersionType;
}