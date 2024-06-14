export interface JobPagination {
    pageIndex: number;
    pageSize:  number;
    totalRow:  number;
    keywords:  null;
    data:      Career[];
}

export interface Career {
    id:                    number;
    tenCongViec:           string;
    danhGia:               number;
    giaTien:               number;
    nguoiTao:              number;
    hinhAnh:               string;
    moTa:                  string;
    maChiTietLoaiCongViec: number;
    moTaNgan:              string;
    saoCongViec:           number;
}
export interface JobTypePagination {
    pageIndex: number;
    pageSize:  number;
    totalRow:  number;
    keywords:  null;
    data:      JobType[];
}

export interface JobType {
    id:              number;
    tenLoaiCongViec: string;
}

export interface JobHiredPagination {
    pageIndex: number;
    pageSize:  number;
    totalRow:  number;
    keywords:  null;
    data:      JobHired[];
}

export interface JobHired {
    id:          number;
    maCongViec:  number;
    maNguoiThue: number;
    ngayThue:    string;
    hoanThanh:   boolean;
}