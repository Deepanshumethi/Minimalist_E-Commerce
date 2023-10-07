import React, { useState } from 'react'
import products from '../ProductsList';
import ProductCard from '../ProductCard'
import Nav from '../Nav'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../ScrolltoTop';

function Categories(props) {
    let categorie = products.map((categorie) => (
        (categorie.categorie)
    ))
    let uniqueCategorie = Array.from(new Set(categorie))
    let [mainCategorie, setCategorie] = useState("");
    const
        filteredCategorie = products.filter(function (product) {
            return (product.categorie == mainCategorie)
        })
        // console.log("yeh hai woh filterd products => ",filteredCategorie)
        const navigate = useNavigate();

        function handleClickHome(event){
            navigate('/');
          }

    return (
        <>
        <ScrollToTop/>
            <Nav />
            <div className='container-fluid'>
                <div className='categoriesLogo'>
                    <span className='homeLogo' onClick={handleClickHome}><i className="fa-solid fa-angle-left"></i>Home</span>
                </div>
            </div>

            <div className='container-fluid categorieNameBtnLis '>
                <div className='Maincategorie'>{mainCategorie}</div>
                <div className='listOfCategorie'>
                    <button onClick={() => setCategorie("All")}> All</button>
                    {
                        uniqueCategorie.map((categorie) => (
                            <button onClick={() => setCategorie(categorie)}>{categorie}</button>
                           
                        ))
                        
                    }
                    {
                        console.log("chhose kri categorie => ",mainCategorie)
                    }
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row filteredProducts'>
                    {
                        (mainCategorie == "" ? products.map((Products) => (
                            <div className='col-lg-3 col-md-4 col-sm-6 product'>
                                <ProductCard product={Products}/>
                            </div>)) :mainCategorie == "All" ? products.map((Products) => (
                            <div className='col-lg-3 col-md-4 col-sm-6 product'>
                                <ProductCard product={Products}/>
                            </div>)): filteredCategorie.map((FilteredProducts) => (
                                <div className='col-lg-3 col-md-4 col-sm-6 product'>
                                    <ProductCard product={FilteredProducts} />
                                </div>
                            )))

                    }
                </div>


            </div>
            <Link to="/Categories"></Link>
            <Link to="/home"></Link>


        </>
    )
}

export default Categories