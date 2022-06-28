import React from 'react'
import Base from './Base'
import '../style.css'
import Heading from './Heading'
import Card from './Card'
import CoffeeData from './coffee-data/data'
import SocialFollow from "./SocialFollow"

const Home = () => {
    return (
        <Base>
            <div className="bg-image">
                <div className="bg-overlay">
                    <div className="content text-center">
                        <h1 className="heading  mb-3 myFontSize">Mr. X Coffee Shop!</h1>
                        <h3 className="heading px-2">best coffee around the world!</h3>
                    </div>
                </div>
            </div>

            
            <div>
                <Heading title="About Ourself" className="text-center my-5 py-3"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 mb-4">
                            <img src="https://www.sciencenews.org/wp-content/uploads/2015/09/100315_coffee_opener_NEW_0.jpg" alt="about us" width="100%"/>
                        </div>
                        <div className="col-md-7 col-sm-12 my-auto">
                            <div className="content">
                                <p>Opening Hours: 9:00 A.M - 10 P.M Monday - Sunday</p>
                                <p>Locations: Kebon Jeruk, Tangerang, There</p>
                                <p>Contact Information: asdfsd@gmail.com, Phone no. 109283091823</p>
                                <p>Background information: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dolor a urna mollis tincidunttae sapien. dum, quis vulputate turpis tristique. Curabitur feugiat nisi id leo commodo, eget tincidunt ligula ultrices. Curabitur vitae pharetra dui. Nulla facilisi. Vivamus vulputate, risus at luctus pulvinar, lectus odio gravida dui, vel tincidunt lacus nisl quis urna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Heading title="Promotions" className="text-center my-5 py-3"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 mb-4">
                            <img src="https://png.pngtree.com/png-vector/20210129/ourlarge/pngtree-buy-2-get-1-free-offer-png-image_2857991.jpg" alt="about us" width="100%"/>
                        </div>
                        <div className="col-md-7 col-sm-12 my-auto">
                            <div className="content">
                                <h1>2 for 1 special!</h1>
                                <p>Buy 2 lattes get a free cappucino</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dolor a urna mollis tincidunttae sapien. dum, quis vulputate turpis tristique. Curabitur feugiat nisi id leo commodo, eget tincidunt ligula ultrices. Curabitur vitae pharetra dui. Nulla facilisi. Vivamus vulputate, risus at luctus pulvinar, lectus odio gravida dui, vel tincidunt lacus nisl quis urna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
          
           <div>
                <Heading title="Popular Coffee's" className="text-center my-5 py-3"/>
                <div className="container">
                        <div className="row justify-content-center">
                                {CoffeeData.map(({name, src, price, description}, index) => {
                                    return (
                                    <div className="col-md-3 col-sm-6 mb-5">
                                        <Card 
                                            name={name}
                                            src={src}
                                            price={price}
                                        />
                                    </div>
                                    )
                                })}  
                        </div>
                </div>
           </div>

        
           
           <div id="contactUs" className="mb-5">
            <Heading title="Feedback Form" className="text-center my-3 py-2"/> 
            <div className="form container">
                <div className="row align-items-center ">
                        <div className="col-md-6  p-5 my-auto">
                            <img src="https://img4.goodfon.com/wallpaper/nbig/7/99/kofe-chashka-koritsa.jpg" alt="" width="100%"/>
                        </div>
                        <div className="col-md-6 col-sm-12 px-4 mx-auto">
                            <form name='contact' method='POST' data-netlify="true">
                                <input type='hidden' name='form-name' value='contact' />
                                <input type="text" placeholder="Your Name" required  name="name" />
                                <input type="email" placeholder="Your Email" required name="email" />
                                <textarea cols="30" rows="7" placeholder="Your Message" required name="message"></textarea>
                                <button>Send Message</button>
                            </form>
                        </div>
                </div>
            </div>

            <div>
                <Heading title="Social Follow" className="text-center my-5 py-3"/>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-7 col-sm-12 my-auto">
                            <SocialFollow />
                        </div>
                    </div>
                </div>
           </div>

           </div>
        </Base>
    )
}



export default Home
