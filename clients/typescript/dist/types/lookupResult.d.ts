import { IdType } from "./idType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupResult {
    accountNumber: string;
    idTypeValue: IdType;
    idTypeValueSpecified: boolean;
    idType: IdType | null;
    id: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
