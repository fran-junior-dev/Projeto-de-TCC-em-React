import React from 'react'
import { FaFire } from 'react-icons/fa'
import { GiCutDiamond, GiMetalBar } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'
import './Pricing.css'

function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className="pricing_section">
                <div className="pricing_wrapper">
                    <h1 className="pricing_heading">Products</h1>
                    <div className="pricing_container">
                        <Link to='/' className='pricing_container-card'>
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>

                                <h3>DELL NOTEBOOK GAMER ALIENWARE AREA-51M R2</h3>

                                <h4>R$ 27.998,00</h4>

                                <ul className="pricing_container-features">
                                    <li>Intel® Core™ i7-10700 (2.9GHz até 4.8GHz com Turbo Boost Max 3.0, cache de 16MB, octa-core, 10ª geração) </li>
                                </ul>

                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Buy Now
                                </Button>
                            </div>
                        </Link>

                        <Link to='/' className='pricing_container-card'>
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <GiMetalBar />
                                </div>

                                <h3>Samsung Book</h3>

                                <h4>R$ 6.299,10</h4>

                                <ul className="pricing_container-features">
                                    <li>Processador Intel® Core™ i7- 15.6" Full HD</li>
                                </ul>

                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Buy Now
                                </Button>
                            </div>
                        </Link>

                        <Link to='/' className='pricing_container-card'>
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <GiCutDiamond />
                                </div>

                                <h3>MacBook Pro 16 polegadas</h3>

                                <h4>R$ 35.299,00</h4>

                                <ul className="pricing_container-features">
                                    <li>Processador Intel Core i9 (9ª geração) de oito núcleos e 2,3 GHz / Turbo Boost até 4,8 GHz</li>
                                </ul>

                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Buy Now
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
