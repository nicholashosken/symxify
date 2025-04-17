import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface ConvertToJwtRequest extends EcaaBaseRequest {
    samlAssertion: string;
    version1: VersionType;
}
