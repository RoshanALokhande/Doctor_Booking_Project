import React from 'react'
import Header from '../components/Header'
import SecialityMenu from '../components/SecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home= () => {
    return (
        <div>
            <Header/>
            <SecialityMenu/>
            <TopDoctors/>
            <Banner/>
        </div>
    )
}

export default Home