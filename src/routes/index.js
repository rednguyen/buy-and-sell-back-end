import { getAllListingsRoute } from "./getAllListings";
import { createNewListingRoute } from "./createNewListing";
import { getListingRoute } from "./getListing"
import { addViewToListingRoute } from "./addViewToListing";
import { getUserListingsRoute } from "./getUserListings";
import { updatedListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deletListing";

export default [
    getAllListingsRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updatedListingRoute,
    deleteListingRoute,
];