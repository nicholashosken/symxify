import { AudioFields } from "./audioFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AudioSingleSelectableFields {
    includeAllAudioFieldsValue: boolean;
    includeAllAudioFieldsValueSpecified: boolean;
    includeAllAudioFields: boolean | null;
    audioFields: AudioFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}