import { GetPrincipalsResult } from "./getPrincipalsResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";
export interface GetPrincipalsResponse extends EcaaBaseResponse {
    principalsResult: GetPrincipalsResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
