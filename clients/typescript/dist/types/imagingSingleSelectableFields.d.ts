import { ImagingFields } from "./imagingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ImagingSingleSelectableFields {
    includeAllImagingFieldsValue: boolean;
    includeAllImagingFieldsValueSpecified: boolean;
    includeAllImagingFields: boolean | null;
    imagingFields: ImagingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
