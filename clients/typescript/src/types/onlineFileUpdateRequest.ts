import { OnlineFileFields_2 } from "./onlineFileFields_2";

export interface OnlineFileUpdateRequest {
    onlineFileFileRecordValue: number;
    onlineFileFileRecordValueSpecified: boolean;
    onlineFileFileRecord: number | null;
    onlineFileFields: OnlineFileFields_2;
}