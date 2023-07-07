import { configureStore } from "@reduxjs/toolkit";
import { serviceSlice } from "../Service";
import { testimonialSlice } from "../Testimonial";
import { blogSlice } from "../Blog";
import { BlogDeatilsSlice } from "../BlogDetails";
import { categoriesSlice } from "../Categories";
import { recentPostSlice } from "../RecentPostSlice";
import { courseSlice } from "../Course";
import { categorytWithBlogSlice } from "../CategoriesWithBlog";
import { AuthSlice } from "../Auth";




const Store = configureStore({
    reducer:{
        service:serviceSlice.reducer,
        testimonial:testimonialSlice.reducer,
        blog:blogSlice.reducer,
        detailBlog:BlogDeatilsSlice.reducer,
        categories:categoriesSlice.reducer,
        recentPost: recentPostSlice.reducer,
        course:courseSlice.reducer,
        categoriesBlog:categorytWithBlogSlice.reducer,
        auth:AuthSlice.reducer,

    }
});

export default Store

