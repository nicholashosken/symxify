import { AudioFields } from "./audioFields";
import { VersionType } from "./versionType";

export interface AudioSingleSelectableFields {
    includeAllAudioFields: boolean | null;
    audioFields: AudioFields;
    version1: VersionType;
}