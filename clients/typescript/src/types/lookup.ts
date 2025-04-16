import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Lookup {
    id: string;
    idTypeValue: number;
    idTypeValueSpecified: boolean;
    idType: number | null;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    number: string;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}