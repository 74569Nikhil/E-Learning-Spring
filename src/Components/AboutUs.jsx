import backgroundVideo from '../video/AboutUs.mp4';

import { Container } from "react-bootstrap";


export default function AboutUs(){
    return(
        <>
        <section className="section-white mt-5">
        <div className="container text-center">
            <h1>About AshirWad</h1>
            <p>Who are we</p>
            <Container>
                <h5>We are a contemporary jewelry destination, offering a diverse array of exquisite pieces that blend traditional
                    and modern styles. With a rich assortment of over 1000 designs, SwarnaRatna is your go-to for handcrafted local
                    gems and globally acclaimed brands. Our pride lies in presenting a meticulously curated selection that caters
                    to every taste. If you can't find what you're looking for, our team is dedicated to sourcing it for you.
                </h5>
                <h5>
                    With a legacy spanning three decades, we bring credibility and expertise to meet your unique jewelry desires.
                    Whether you seek a single piece, a collection for a special occasion, or corporate orders, SwarnaRatna is your
                    all-encompassing destination for all things jewelry. Explore the world of SwarnaRatna, where every piece is a
                    timeless celebration of elegance and grace.
                </h5>
            </Container>
        </div>
    </section>

    <video src={backgroundVideo} width="100%" height="80%" className="mt-4" autoPlay loop playsInline />
    </>
    );
}