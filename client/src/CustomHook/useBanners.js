import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerData } from "../State/Thunk/getBannerData";


const useBanners = () => {
    const dispatch = useDispatch()
    const banners = useSelector(state => state.banner.banner)

    useEffect(() => {
        dispatch(getBannerData())
    }, [dispatch])

    return [banners]
};

export default useBanners;