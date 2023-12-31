import React, { useEffect } from 'react'
import Breadcrumbs from '../../component/common/Breadcrumbs/Breadcrumbs'
import { Container } from 'react-bootstrap'
import './Blog.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faMessage, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import bloagimg from '../../assets/images/blog-1.jpg'
import bloagimgrcnt from '../../assets/images/blog-recent-posts-1.jpg'
import srchicn from '../../assets/images/magnifying-glass-solid.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from '../../redux/Blog'
import { fetchCategories } from '../../redux/Categories'
import { fetchRecentPost } from '../../redux/RecentPostSlice'
import { Link } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'


const Blog = () => {
    const { blogData } = useSelector((state) => state?.blog)
    const { categoriesData } = useSelector((state) => state.categories)
    const { recentPostData } = useSelector((state) => state?.recentPost)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlog())
        dispatch(fetchCategories())
        dispatch(fetchRecentPost())
    }, [])
    return (
        <>
            <Breadcrumbs />
            {/* blog-main-wrapper */}
            <div className='bloag-mainwrapper'>
                <Container>
                    <div class="row">

                        <div class="col-lg-8 entries">

                            {/* <article class="entry" data-aos="fade-up">

                                <div class="entry-img">
                                    <img src={bloagimg} alt="" class="img-fluid"/>
                                </div>

                                <h2 class="entry-title">
                                    <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis</a>
                                </h2>

                                <div class="entry-meta">
                                    <ul>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faUser} /></i> <a href="blog-single.html">John Doe</a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faClock} /></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faMessage} /></i> <a href="blog-single.html">12 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="entry-content">
                                    <p>
                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                        Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                    </p>
                                    <div class="read-more">
                                        <a href="blog-single.html">Read More</a>
                                    </div>
                                </div>

                            </article>

                            <article class="entry" data-aos="fade-up">

                                <div class="entry-img">
                                    <img src={bloagimg} alt="" class="img-fluid"/>
                                </div>

                                <h2 class="entry-title">
                                    <a href="blog-single.html">Nisi magni odit consequatur autem nulla dolorem</a>
                                </h2>

                                <div class="entry-meta">
                                    <ul>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faUser} /></i> <a href="blog-single.html">John Doe</a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faClock} /></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faMessage} /></i> <a href="blog-single.html">12 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="entry-content">
                                    <p>
                                        Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                                        Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
                                    </p>
                                    <div class="read-more">
                                        <a href="blog-single.html">Read More</a>
                                    </div>
                                </div>

                            </article>

                            <article class="entry" data-aos="fade-up">

                                <div class="entry-img">
                                    <img src={bloagimg} alt="" class="img-fluid"/>
                                </div>

                                <h2 class="entry-title">
                                    <a href="blog-single.html">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</a>
                                </h2>

                                <div class="entry-meta">
                                    <ul>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faUser} /></i> <a href="blog-single.html">John Doe</a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faClock} /></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faMessage} /></i> <a href="blog-single.html">12 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="entry-content">
                                    <p>
                                        Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                                        Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                                    </p>
                                    <div class="read-more">
                                        <a href="blog-single.html">Read More</a>
                                    </div>
                                </div>

                            </article>

                            <article class="entry" data-aos="fade-up">

                                <div class="entry-img">
                                    <img src={bloagimg} alt="" class="img-fluid"/>
                                </div>

                                <h2 class="entry-title">
                                    <a href="blog-single.html">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.</a>
                                </h2>

                                <div class="entry-meta">
                                    <ul>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faUser} /></i> <a href="blog-single.html">John Doe</a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faClock} /></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                                        <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faMessage} /></i> <a href="blog-single.html">12 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="entry-content">
                                    <p>
                                        Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                                        Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                                    </p>
                                    <div class="read-more">
                                        <a href="blog-single.html">Read More</a>
                                    </div>
                                </div>

                            </article> */}

                            {
                                blogData !== null ? (
                                    <>
                                        {
                                            blogData?.data?.map((blog, index) => {
                                                return (
                                                    <>
                                                        <article class="entry" data-aos="fade-up" key={index._id}>

                                                            <div class="entry-img">
                                                                <img src={`https://restapinodejs.onrender.com/api/blog/image/${blog._id}`} alt="" className="img-fluid" />

                                                            </div>

                                                            <h2 class="entry-title">
                                                                <Link to="/blogdetails">{blog.title}</Link>
                                                            </h2>

                                                            <div class="entry-meta">
                                                                <ul>
                                                                    <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faUser} /></i> <a href="blog-single.html">John Doe</a></li>
                                                                    <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faClock} /></i> <a href="blog-single.html"><time dateTime="2020-01-01">{(new Date(blog.createdAt)).toLocaleDateString()}</time></a></li>
                                                                    <li class="d-flex align-items-center"><i><FontAwesomeIcon icon={faMessage} /></i> <a href="blog-single.html">{blog.comment_count} Comments</a></li>
                                                                </ul>
                                                            </div>

                                                            <div class="entry-content">
                                                                <p dangerouslySetInnerHTML={{
                                                                    __html: blog?.postText.slice(0, 350,)
                                                                }}>

                                                                </p>
                                                                <div class="read-more">
                                                                    <Link to={`/blogdetails/${blog?._id}`}>Read More</Link>
                                                                </div>
                                                            </div>

                                                        </article>

                                                    </>

                                                )
                                            })
                                        }
                                    </>
                                ) : (
                                    <div className="loader_wpr">
                                        <ColorRing
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                        />
                                    </div>

                                )}

                            <div class="blog-pagination">
                                <ul class="justify-content-center">
                                    <li class="disabled"><i class="icofont-rounded-left"></i></li>
                                    <li><a href="#">1</a></li>
                                    <li class="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
                                </ul>
                            </div>

                        </div>

                        <div class="col-lg-4">

                            <div class="sidebar" data-aos="fade-left">

                                <h3 class="sidebar-title">Search</h3>
                                <div class="sidebar-item search-form">
                                    <form action="">
                                        <input type="text" />
                                        <button type="submit"><i><img src={srchicn} alt='' /></i></button>
                                    </form>

                                </div>

                                <h3 class="sidebar-title">Categories</h3>
                                <div class="sidebar-item categories">
                                    <ul>
                                        <li><a href="#">General <span>(25)</span></a></li>
                                        <li><a href="#">Lifestyle <span>(12)</span></a></li>
                                        <li><a href="#">Travel <span>(5)</span></a></li>
                                        <li><a href="#">Design <span>(22)</span></a></li>
                                        <li><a href="#">Creative <span>(8)</span></a></li>
                                        <li><a href="#">Educaion <span>(14)</span></a></li>
                                    </ul>

                                </div>

                                <h3 class="sidebar-title">Recent Posts</h3>
                                <div class="sidebar-item recent-posts">
                                    <div class="post-item clearfix">
                                        <img src={bloagimgrcnt} alt="" />
                                        <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                                        <time datetime="2020-01-01">Jan 1, 2020</time>
                                    </div>

                                    <div class="post-item clearfix">
                                        <img src={bloagimgrcnt} alt="" />
                                        <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                                        <time datetime="2020-01-01">Jan 1, 2020</time>
                                    </div>

                                    <div class="post-item clearfix">
                                        <img src={bloagimgrcnt} alt="" />
                                        <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                                        <time datetime="2020-01-01">Jan 1, 2020</time>
                                    </div>

                                    <div class="post-item clearfix">
                                        <img src={bloagimgrcnt} alt="" />
                                        <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                                        <time datetime="2020-01-01">Jan 1, 2020</time>
                                    </div>

                                    <div class="post-item clearfix">
                                        <img src={bloagimgrcnt} alt="" />
                                        <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                                        <time datetime="2020-01-01">Jan 1, 2020</time>
                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>
                </Container>
            </div>
            {/* blog-main-wrapper */}
        </>
    )
}

export default Blog