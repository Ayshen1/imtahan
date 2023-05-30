import { Helmet } from "react-helmet";
import { GetAll } from '../../api/httprequest';
import { useState, useEffect } from 'react'
import "./home.scss"

export default function Home() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        GetAll().then((res) => {
            setUsers(res);
            console.log(res);
        })
    }, [])


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="section1">
                <div className="box">
                    <p>PROCESS VISA WITHOUT WITHIN HOURS</p>
                    <h1>Immigrations &<br />
                        Visa Consultation</h1>
                        <button>Book Consultancy</button>
                </div>

            </div>
            <div className="section2">
        <div className="container">
          <h6>Start <b>planning</b> your <br />
            New <b>Dream</b></h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation.</p>
          <button>Request Free Consultancy</button>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <h1>Requirements to be Immigrants</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

            <div className="cards">
                {
                    users && users
                        .map((user) => (
                            <div key={user._id}>

                                <img src={user.image} />
                                <p>{user.lastname}</p>
                                <p>{user.age}</p>
                            </div>
                        )
                        )
                }
            </div>

            <div className="section4">
            <div className="container">
          <h1>Requirements to be Immigrants</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
            </div>
        </div>

    )
}
