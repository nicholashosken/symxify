import { Imaging } from "./imaging";
import { VersionType } from "./versionType";
export interface ImagingSelectFieldsResponse {
    imaging: Imaging;
    version1: VersionType;
    messageId: string;
}
