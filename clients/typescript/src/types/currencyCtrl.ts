import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CurrencyCtrl {
    buyRate: string;
    buyRateDescription: string;
    currencyDecimalPlacesValue: number;
    currencyDecimalPlacesValueSpecified: boolean;
    currencyDecimalPlaces: number | null;
    currencyMinimumUnitsValue: number;
    currencyMinimumUnitsValueSpecified: boolean;
    currencyMinimumUnits: number | null;
    currencyName: string;
    currencyShortName: string;
    fipsCountryCode: string;
    primeRate: string;
    primeRateDescription: string;
    sellRate: string;
    sellRateDescription: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}