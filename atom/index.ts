import { ILocation, ISearch, IStore } from "@core/interfaces/store";
import { atom } from "recoil";

const DEFAULT_LAT = "37.497625203";
const DEFAULT_LNG = "127.03088379";
const DEFAULT_ZOOM = 5;

export const mapState = atom({
  key: "map",
  default: null,
  dangerouslyAllowMutability: true,
});

export const currentStoreState = atom<IStore | null>({
  key: "store",
  default: null,
});

export const locationState = atom<ILocation>({
  key: "location",
  default: {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    zoom: DEFAULT_ZOOM,
  },
});
export const searchState = atom<ISearch | null>({
  key: "search",
  default: null,
});
