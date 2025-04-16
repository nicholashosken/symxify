import { EftAddendaInfoInfo } from "./eftAddendaInfoInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftAddendaInfo {
    info: EftAddendaInfoInfo[];
    infoSpecified: boolean;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
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
