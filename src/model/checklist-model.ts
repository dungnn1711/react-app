export interface CheckListModel {
    items?: Array<CheckListItemModel>;
}

export enum ItemStatus {
    DONE = "DONE",
    ON_HOLD = "ON_HOLD",
    NOT_YET = "NOT_YET"
}

export interface UserInfo {
    id: number,
    name: string,
    dob: string,
    url: string
}

export type CheckListItemModel = {
    id: number;
    users: Array<UserInfo>; 
    title: string;
    description?: string;
    status: ItemStatus;
}