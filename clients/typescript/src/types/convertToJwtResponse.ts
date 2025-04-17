import { ConvertToJwtResult } from "./convertToJwtResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface ConvertToJwtResponse extends EcaaBaseResponse {
    convertToJwtResult: ConvertToJwtResult;
    version1: VersionType;
}