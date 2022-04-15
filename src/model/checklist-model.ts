export interface CheckListModel {
    items?: Array<CheckListItemModel>;
}

export enum ItemStatus {
    DONE,
    ON_HOLD,
    NOT_YET
}

export type CheckListItemModel = {
    id: string;
    title: string;
    description?: string;
    status: ItemStatus;
}