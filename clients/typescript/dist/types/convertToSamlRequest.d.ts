import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface ConvertToSamlRequest extends EcaaBaseRequest {
    jwtToken: string;
    version1: VersionType;
}
