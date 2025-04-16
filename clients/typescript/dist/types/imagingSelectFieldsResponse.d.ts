import { Imaging } from "./imaging";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ImagingSelectFieldsResponse {
    imaging: Imaging;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
