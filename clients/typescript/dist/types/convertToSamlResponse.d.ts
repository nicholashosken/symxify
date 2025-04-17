import { ConvertToSamlResult } from "./convertToSamlResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";
export interface ConvertToSamlResponse extends EcaaBaseResponse {
    convertToSamlResult: ConvertToSamlResult;
    version1: VersionType;
}
