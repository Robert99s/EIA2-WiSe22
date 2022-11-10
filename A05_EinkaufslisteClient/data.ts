namespace A05_EinkaufslisteClient {
    export interface ItemAdded {
        bought: boolean;
        itemName: string;
        amount: number;
        comment: string;
        date: string;
    }

    export interface Data {
    [itemNumber: number]: ItemAdded[];
    }

    export let data: Data = {
        0: [
        {bought: false, itemName: "Brot", amount: 1, comment: "Weizen", date: "03.11.2022"}
        ],
        1: [
            {bought: true, itemName: "Milch", amount: 1, comment: "Glasflasche", date: "03.11.2022"}
            ]
    };
}