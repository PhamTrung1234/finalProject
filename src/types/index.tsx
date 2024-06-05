export type NavMenu ={
    href:string;
    text:string;
    key:number;
    description?:string;
    target?:string
}
export type MaLoaiCongViec = {
    id:number;
    tenLoaiCongViec:string;
    dsNhomChiTietLoai:Array<dsNhomChiTietLoai>
  }
export  type dsNhomChiTietLoai = {
    id:number;
    tenNhom:string;
    hinhAnh:string;
    maLoaiCongviec:number;
    dsChiTietLoai:Array<dsChiTietLoai>
  }
export  type dsChiTietLoai ={
    id:number;
    tenChiTiet:string;
  }