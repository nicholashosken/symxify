import { ImagingFields } from "./imagingFields";
import { VersionType } from "./versionType";
export interface ImagingSingleSelectableFields {
    includeAllImagingFields: boolean | null;
    imagingFields: ImagingFields;
    version1: VersionType;
}
