import React, { useEffect } from 'react'
import './Home.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import slider images
import sliderImg1 from '../../../src/assets/images/slide-1.jpg'
import sliderImg2 from '../../../src/assets/images/slide-2.jpg'
import sliderImg3 from '../../../src/assets/images/slide-3.jpg'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { faArchway, faChalkboardTeacher, faCheckDouble, faFileLines, faHourglassHalf, faLayerGroup, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import companyicn01 from '../../../src/assets/images/client-1.png';
import companyicn02 from '../../../src/assets/images/client-2.png';
import companyicn03 from '../../../src/assets/images/client-3.png';
import companyicn04 from '../../../src/assets/images/client-4.png';
import companyicn05 from '../../../src/assets/images/client-5.png';
import companyicn06 from '../../../src/assets/images/client-6.png';
import companyicn07 from '../../../src/assets/images/client-7.png';
import companyicn08 from '../../../src/assets/images/client-8.png';
import testiimg01 from '../../../src/assets/images/testimonials-1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchService } from '../../redux/Service';
import { fetchTesimonial } from '../../redux/Testimonial';



const Home = () => {
    const { serviceData } = useSelector((state) => state?.service)
    const { testimonialData } = useSelector((state) => state?.testimonial)
    //console.log(serviceData);
    console.log(testimonialData);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchService())
        dispatch(fetchTesimonial())
    }, [dispatch])
    return (
        <>
            <div className="banner_sec">

                <div className="banner_inner">
                    <Swiper navigation={true} loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide>
                            <div className="bannerSlide_each">
                                <img src={sliderImg1} alt="" />
                                <div className="bannerSlide_each_inner" data-aos="fade-up">
                                    <div className="bannerSlide_each_conetnt"  >
                                        <h2>Welcome to Company</h2>
                                        <p>
                                            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                        </p>
                                        <div className="btn_center text-center">
                                            <Link className='cmnBtn_border' to='/'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bannerSlide_each" >
                                <img src={sliderImg2} alt="" />
                                <div className="bannerSlide_each_inner" data-aos="fade-up">
                                    <div className="bannerSlide_each_conetnt">
                                        <h2>Welcome to Company</h2>
                                        <p>
                                            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                        </p>
                                        <div className="btn_center text-center">
                                            <Link className='cmnBtn_border' to='/'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bannerSlide_each" >
                                <img src={sliderImg3} alt="" />
                                <div className="bannerSlide_each_inner" data-aos="fade-up">
                                    <div className="bannerSlide_each_conetnt">
                                        <h2>Welcome to Company</h2>
                                        <p>
                                            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                        </p>
                                        <div className="btn_center text-center">
                                            <Link className='cmnBtn_border' to='/'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

            {/* about section start */}
            <div className="about_sec cmn_gap">
                <Container>
                    <div className="about_inner">
                        <div class="section-title">
                            <h2>About Us</h2>
                        </div>
                        <div class="row content">
                            <div class="col-lg-6" data-aos="fade-right">
                                <h2>Eum ipsam laborum deleniti velitena</h2>
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <ul>
                                    <li><i><FontAwesomeIcon icon={faCheckDouble} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                                    <li><i><FontAwesomeIcon icon={faCheckDouble} /></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                    <li><i><FontAwesomeIcon icon={faCheckDouble} /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                                </ul>
                                <p class="font-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* about section end */}

            {/* servie section start */}
            <div className="service_sec cmn_gap">
                <Container>
                    <div className="service_inner" data-aos="fade-up">
                        <div class="section-title">
                            <h2>Services</h2>
                            <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
                        </div>
                        <div class="row services_row">
                            {
                                serviceData?.data?.map((service, index) => {
                                    return (
                                        <>
                                            <div class="col-lg-4 col-md-6 services_col" data-aos="zoom-in" data-aos-delay="100">
                                                <div class="icon-box iconbox-blue">
                                                    <div class="icon">
                                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                                        </svg>
                                                        <i><FontAwesomeIcon icon={faChalkboardTeacher} /></i>
                                                    </div>
                                                    <h4><Link to=''>{service.name}</Link></h4>
                                                    <p>{service.details}</p>
                                                </div>
                                            </div>
                                        </>
                                    )

                                })
                            }

                            {/* <div class="col-lg-4 col-md-6 services_col" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box iconbox-blue">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                        </svg>
                                        <i><FontAwesomeIcon icon={faChalkboardTeacher} /></i>
                                    </div>
                                    <h4><Link to=''>Training</Link></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 services_col" data-aos="zoom-in" data-aos-delay="200">
                                <div class="icon-box iconbox-orange ">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                        </svg>
                                        <i><FontAwesomeIcon icon={faFileLines} /></i>
                                    </div>
                                    <h4><Link to="">Placement</Link></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 services_col" data-aos="zoom-in" data-aos-delay="300">
                                <div class="icon-box iconbox-pink">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                                        </svg>
                                        <i><FontAwesomeIcon icon={faHourglassHalf} /></i>
                                    </div>
                                    <h4><Link to="">Interview Prepration</Link></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 services_col" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box iconbox-yellow">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                                        </svg>
                                        <i><FontAwesomeIcon icon={faLayerGroup} /></i>
                                    </div>
                                    <h4><Link to="">Nemo Enim</Link></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 services_col" data-aos="zoom-in" data-aos-delay="200">
                                <div class="icon-box iconbox-red">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                                        </svg>
                                        <i><FontAwesomeIcon icon={faPlayCircle} /></i>
                                    </div>
                                    <h4><Link to="">Dele Cardo</Link></h4>
                                    <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 services_col" data-aos="zoom-in" data-aos-delay="300">
                                <div class="icon-box iconbox-teal">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                                        </svg>
                                        <i><FontAwesomeIcon icon={faArchway} /></i>
                                    </div>
                                    <h4><Link to="">Divera Don</Link></h4>
                                    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </Container>
            </div>
            {/* servie section end */}


            {/* testimonial-section */}
            <div className='testimonial-sec cmn_gap'>
                <Container>
                    <div className='company-mainwrap' data-aos='fade-up'>
                        <div class="section-title">
                            <h2>TESTIMONIALS</h2>
                            <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
                        </div>
                        <div className='row testimonial-rw'>
                            {
                                testimonialData?.testimonials?.map((test, index) => {
                                    return (
                                        <>
                                            <div className='col-lg-6 testimonial-clm' data-aos="zoom-in" data-aos-delay="100">
                                                <div class="testimonial-item">
                                                    <img src={testiimg01} class="testimonial-img" alt="" />
                                                    <h3>{test.name}</h3>
                                                    <h4>{test.position}</h4>
                                                    <p>
                                                        <i class="quote">&ldquo;</i>
                                                        {test.talk.slice(0,150)}...
                                                        <i class="quote">&rdquo;</i>
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            {/* <div className='col-lg-6 testimonial-clm' data-aos="zoom-in" data-aos-delay="100">
                                <div class="testimonial-item">
                                    <img src={testiimg01} class="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                        <i class="quote">&ldquo;</i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i class="quote">&rdquo;</i>
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-6 testimonial-clm' data-aos="zoom-in" data-aos-delay="100">
                                <div class="testimonial-item">
                                    <img src={testiimg01} class="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                        <i class="quote">&ldquo;</i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i class="quote">&rdquo;</i>
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-6 testimonial-clm' data-aos="zoom-in" data-aos-delay="100">
                                <div class="testimonial-item">
                                    <img src={testiimg01} class="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                        <i class="quote">&ldquo;</i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i class="quote">&rdquo;</i>
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-6 testimonial-clm' data-aos="zoom-in" data-aos-delay="100">
                                <div class="testimonial-item">
                                    <img src={testiimg01} class="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                        <i class="quote">&ldquo;</i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i class="quote">&rdquo;</i>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Container>
            </div>
            {/* testimonial-section */}
            <div className='company-sec cmn_gap'>
                <Container>
                    <div className='company-mainwrap' data-aos='fade-up'>
                        <div class="section-title">
                            <h2>COMPANYS</h2>
                        </div>
                        <div className='wrapper-companyImg'>
                            <div className='row companyimg-rw'>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn01} class="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn02} class="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn03} class="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn04} class="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn05} class="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn06} class="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn07} class="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 companyimg-col" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="client-logo">
                                        <img src={companyicn08} class="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home