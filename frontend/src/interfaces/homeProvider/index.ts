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
