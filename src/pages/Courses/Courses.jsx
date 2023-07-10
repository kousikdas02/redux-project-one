import { useDispatch, useSelector } from 'react-redux';
import './Courses.scss'
import { Container } from 'react-bootstrap'
import { useEffect } from 'react';
import { fetchCourse } from '../../redux/Course';
import { Link } from 'react-router-dom';

const Courses = () => {
    const { courseData } = useSelector((state) => state?.course)
    console.log(courseData);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCourse())
    }, [])
    return (
        <>
            {/* ======= Breadcrumbs ====== */}
            <section id="breadcrumbs" className="breadcrumbs">
                <Container>

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Courses</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Courses</li>
                        </ol>
                    </div>

                </Container>
            </section>
            {/* End Breadcrumbs */}

            {/* < ======= Pricing Section =======  */}
            <section id="pricing" className="pricing cmn_gap">
                <Container data-aos="fade-up">

                    <div className="row">
                        {
                            courseData?.Courses?.map((course, index) => {
                                console.log(course);
                                return (
                                    <>
                                        {/* <div className="col-lg-3 col-md-6">
                                            <div className="box">
                                                <h3>{course.name}</h3>
                                                <img className='w-100 mb-3' src={`https://restapinodejs.onrender.com/api/course/photo/${course._id}`} alt="" />
                                                <ul>
                                                    <li className='text-dark'><strong className='text-primary'>Duration: </strong>{course.duration}</li>
                                                    <li className='text-dark'  ><strong className='text-primary'>Fees: </strong>{course.fees}</li>
                                                    <li className='text-dark'><strong  className='text-primary'>Requirement: </strong>{course.requirement}</li>
                                                    
                                                </ul>
                                                <div className="btn-wrap">
                                                    <Link to={`/courseapply/${course.name}`} className="btn-buy">Apply Courses</Link>
                                             </div>
                                            </div>
                                        </div> */}

                                        <div className="col-lg-3 col-md-6">
                                            <div className="box">
                                                <h3>{course.name}</h3>

                                                <div className="box_content">
                                                    {/* <span className="advanced">Advanced</span> */}
                                                    <h4>{course.fees}</h4>
                                                    <ul>
                                                        <li>Duration: {course.duration}</li>
                                                        <li>Requirement : {course.requirement}</li>
                                                    </ul>
                                                </div>
                                                <div className="btn-wrap">
                                                    <a href="#" className="btn-buy">Apply Couese</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>

                </Container>
            </section>
            {/* End Pricing Section */}
        </>
    )
}

export default Courses