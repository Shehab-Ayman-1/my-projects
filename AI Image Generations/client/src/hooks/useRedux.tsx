import {
  TypedUseSelectorHook,
  useDispatch as UseDispatch,
  useSelector as UseSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = UseDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = UseSelector;
