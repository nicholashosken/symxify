import { ChangeSymitarPasswordResult } from "./changeSymitarPasswordResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";
export interface ChangeSymitarPasswordResponse extends EcaaBaseResponse {
    changeSymitarPasswordResult: ChangeSymitarPasswordResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
