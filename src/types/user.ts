export type Status<T>= {
    statusCode: number;
    content:    T;
    dateTime:   Date;
}

export interface User {
    id:            number;
    name:          string;
    email:         string;
    password:      string;
    phone:         string;
    birthday:      string;
    avatar:        string;
    gender:        boolean;
    role:          Role;
    skill:         string[] | null;
    certification: BookingJob[] | null;
    bookingJob:    BookingJob[];
}

export enum BookingJob {
    Aws = "AWS",
    Ađa = "ađa",
    Empty = "",
    String = "string",
}

export enum Role {
    Admin = "ADMIN",
    User = "USER",
}
export interface UserPagination {
    pageIndex: number;
    pageSize:  number;
    totalRow:  number;
    keywords:  null;
    data:      User[];
}