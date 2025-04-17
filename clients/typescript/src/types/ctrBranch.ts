import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrBranch {
    address: string;
    cashinLocationValue: number;
    cashinLocationValueSpecified: boolean;
    cashinLocation: number | null;
    cashoutLocationValue: number;
    cashoutLocationValueSpecified: boolean;
    cashoutLocation: number | null;
    city: string;
    countryCode: string;
    ein: string;
    idValue: number;
    idValueSpecified: boolean;
    id: number | null;
    lastFmDateValue: string;
    lastFmDateValueSpecified: boolean;
    lastFmDate: string | null;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    name: string;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    state: string;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    zipCode: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}