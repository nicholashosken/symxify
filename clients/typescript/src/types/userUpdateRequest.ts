import { UserFields_2 } from "./userFields_2";

export interface UserUpdateRequest {
    userNumber: number | null;
    userFields: UserFields_2;
}