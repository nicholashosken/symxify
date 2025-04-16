import { StatusType } from "./statusType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CoinType {
    valueValue: number;
    valueValueSpecified: boolean;
    value: number | null;
    statusValue: StatusType;
    statusValueSpecified: boolean;
    status: StatusType | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}