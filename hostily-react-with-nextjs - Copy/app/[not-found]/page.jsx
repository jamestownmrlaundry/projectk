import React from 'react';
import Footer from '../footer/footer';
import HeaderOne from '../header/HeaderOne';

import Link from 'next/link';
import SEO from '@/components/seo';

const NotFound = () => {
    return (
        <>
            <SEO pageTitle='Not Found' />
                <HeaderOne />
                
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page t-center">
                                    <img src="/404.svg" alt="error" />
                                    <div>
                                        <Link class="theme-btn mt-50" href="/">Back to Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </>
    );
};

export default NotFound;