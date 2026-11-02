import {useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "@/store/index";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector = () => useSelector((state: RootState) => state);
