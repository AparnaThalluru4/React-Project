import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
import { EmiCalculator } from "../../components/emi-calculator/emi-calculator";
import { CarouselDemo } from "../../components/carousel-demo/carousel-demo";

export function PortfolioIndex(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header>
                    <div className="fs-2">Aparna</div>
                    <div className="fs-5">React Developer</div>
                    <nav>

                        <span> <Link to="/">Home</Link> </span>

                        <span className="mx-5"> <Link to="/emi"> EMI Calculator </Link> </span>

                        <span> <Link to="/carousel"> Carousel  </Link> </span>

                    </nav>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<div>Hello ! Iam Aparna React Developer</div>}/>
                        <Route path="emi" element={<EmiCalculator/>}/>
                        <Route path="carousel" element={<CarouselDemo/>}/>
                        <Route path="*" element={<div>Requenst not found</div>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}