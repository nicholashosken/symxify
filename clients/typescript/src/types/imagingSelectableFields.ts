import { ImagingFields } from "./imagingFields";
import { VersionType } from "./versionType";

export interface ImagingSelectableFields {
    includeAllImagingFields: boolean | null;
    imagingFields: ImagingFields;
    version1: VersionType;
}