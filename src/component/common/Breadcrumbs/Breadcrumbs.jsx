import React from 'react'
import { Container } from 'react-bootstrap'
import './Breadcrumbs.scss'
const Breadcrumbs = () => {
    return (
        <>
            {/* ======= Breadcrumbs ====== */}
            <section id="breadcrumbs" class="breadcrumbs">
                <Container>

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Courses</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Courses</li>
                        </ol>
                    </div>

                </Container>
            </section>
            {/* End Breadcrumbs */}
        </>
    )
}

export default Breadcrumbs