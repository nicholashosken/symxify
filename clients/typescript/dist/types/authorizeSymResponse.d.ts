import { AuthorizeSymResult } from "./authorizeSymResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";
export interface AuthorizeSymResponse extends EcaaBaseResponse {
    authorizeSymResult: AuthorizeSymResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
