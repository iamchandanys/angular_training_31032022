export enum ActionTypeEnum {
    Info = 1,
    Edit = 2,
    Delete = 3,
    Download = 4,
    Add = 5
}

class ActionButtons {
    name: string | undefined;
    actionType: ActionTypeEnum | undefined;
    isDisabled: boolean | undefined;
}

export const actionButtonList: ActionButtons[] = [
    {
        "name": "Info",
        "actionType": ActionTypeEnum.Info,
        isDisabled: false
    },
    {
        "name": "Edit",
        "actionType": ActionTypeEnum.Edit,
        isDisabled: false
    },
    {
        "name": "Delete",
        "actionType": ActionTypeEnum.Delete,
        isDisabled: false
    },
    {
        "name": "Download",
        "actionType": ActionTypeEnum.Download,
        isDisabled: true
    }
];