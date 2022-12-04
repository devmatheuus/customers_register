export interface ICreateContact {
    fullname: string;
    email: string;
    phone: string;
}

export interface IUpdateContact {
    fullname?: string;
    email?: string;
    phone?: string;
}

export interface IListContacts {
    id: string;
    fullname: string;
    email: string;
    phone: string;
    customerId: string;
    customer: {
        email: string;
        fullname: string;
        phone: string;
    };
}
