import { WireIdCodeField9OtherIdentification } from "./wireIdCodeField9OtherIdentification";
import { VersionType } from "./versionType";

export interface WireIdCode {
    field9OtherIdentification: WireIdCodeField9OtherIdentification[];
    version1: VersionType;
}