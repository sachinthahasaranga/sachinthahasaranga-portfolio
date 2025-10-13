import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

const funFact = [
    {
        title: '50',
        subTitle: 'Successful Projects',
        sample: '+',
    },
    {
        title: '30',
        subTitle: 'Satisfied Clients',
        sample: '+',
    },
    {
        title: '4',
        subTitle: 'Years of Experience',
        sample: '+',
    },
    {
        title: '100',
        subTitle: 'Customer Satisfaction',
        sample: '%',
    },


]


const FunFactSection = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (

        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.sample}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFactSection;