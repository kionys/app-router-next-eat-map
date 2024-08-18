export interface IStore {
  bizcnd_code: string | null;
  bizcnd_code_nm: string | null;
  cgg_code: string | null;
  cgg_code_nm: string | null;
  cob_code: string | null;
  cob_code_nm: string | null;
  crt_time: number | null;
  crtfc_class: string | number | null;
  crtfc_gbn: string | null;
  crtfc_gbn_nm: string | null;
  crtfc_sno: string | null;
  crtfc_upso_mgt_sno: number | null;
  crtfc_ymd: string | null;
  crtfc_yn: string | null;
  food_menu: string | number | null;
  gnt_no: string | number | null;
  map_indict_yn: string | null;
  owner_nm: string | null;
  rdn_addr_code: string | number | null;
  rdn_code_nm: string | null;
  rdn_detail_addr: string | number | null;
  tel_no: string | number | null;
  upd_time: number | null;
  upso_nm: string | null;
  upso_sno: string | number | null;
  use_yn: string;
  x_cnts: string;
  y_dnts: string;
}
