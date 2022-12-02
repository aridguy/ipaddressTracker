import React, { useState } from 'react'
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'
// import axios, { Axios } from 'axios'
import './Home.css'

const Home = () => {

    const [ips, setIps] = useState("");
    const [location, setLocation] = useState({})
    const getIpAddress = () => {
        console.log(ips)
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_q314DJL11K2JD71NGlYOlIfCOQeOX&ipAddress=${ips}`)

            .then((Response) => {
                Response.json()
                    .then((res) => {
                        setLocation(res.location);

                    });





                // console.log({Response});
            })
            .catch((err) => {
                console.log(err)
            })

    }
    const seeNewIp = (event) => {
        setIps(event.target.value)
    }

    return (
        <div>

            <header className='headers'>
                <div className='container-fluid headBg'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='text-white text-center mt-3'>IP Address Tracker</h2>
                            <p className='text-white text-center mt-2'>Track any ip address across the world and get realtime map view</p>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>

                            <div><input onChange={seeNewIp} className='form-control saercher' placeholder='193.764.988.104' type="search" />
                                <input className='btn btn-primary botin' onClick={getIpAddress} type='submit' value='Search' /></div>

                        </div>
                        <div className='col-md-4'></div>
                    </div>
                </div>

                <div className='container p-5'>
                    <div className='row resultRow'>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 mt-5'>
                            <small>IP Address </small>
                            <h3>{ips}123131343</h3>
                        </div>
                        <div className='col-md-2 mt-5'>
                            <small>Location </small>
                            <h3>{location?.city}, {location.region} <br /> </h3>
                        </div>
                        <div className='col-md-2 mt-5'>
                            <small>Time Zone </small>
                        </div>
                        <div className='col-md-2 mt-5'>
                            <small>Isp </small>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
            </header>

        </div>
    )

}

export default Home
