namespace A04_Haushaltshilfe {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        article: [
            { name: "Brot", price: 2.00 },
            { name: "Eier", price: 2.50 },
            { name: "Milch", price: 0.95 },
            { name: "Mehl", price: 1.40 },
            { name: "Äpfel", price: 2.00 },
            { name: "Tofu", price: 0.10 },
            { name: "Nudeln", price: 1.50 },
            { name: "Klopapier", price: 0.78 },
            { name: "Wasser", price: 0.50 },
            { name: "Bananensaft", price: 1.00 }
        ],
        paymentOptions: [
            { name: "Visa", price: 0.00 },
            { name: "Mastercard", price: 0.00 },
            { name: "PayPal", price: 0.00 }
        ],
        chores: [
            { name: "Sweeping", price: 10 },
            { name: "Dusting", price: 10 },
            { name: "Laundry", price: 15 },
            { name: "Vacuuming", price: 15 }
        ]
    };


}