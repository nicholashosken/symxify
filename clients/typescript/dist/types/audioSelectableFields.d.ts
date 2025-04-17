import { AudioFields } from "./audioFields";
import { VersionType } from "./versionType";
export interface AudioSelectableFields {
    includeAllAudioFields: boolean | null;
    audioFields: AudioFields;
    version1: VersionType;
}
