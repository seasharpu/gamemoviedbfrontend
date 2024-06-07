import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { ArtistThumb } from "../molecules/ArtistThumb";
import Title from "../atoms/Title";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const DiscoverWeekly = () => {

    //temporary example
    const soundtracks = [
        {
            "title": "hej1",
            "composer": "Sven",
            "thumbnail": undefined
        },
        {
            "title": "hej2",
            "composer": "Stig",
            "thumbnail": "https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "hej3",
            "composer": "Stuart",
            "thumbnail": "https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    //breaking points for the carousel
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <div className = {`w-full `}>
            <Carousel 
                responsive={responsive}
                swipeable={true}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                {soundtracks.map((track, index) => (
                    <div key={index} className="w-72 h-72 mx-4">
                        <ArtistThumb title={track.title} composer={track.composer} thumbnail={track.thumbnail} width_height="full" styling=""></ArtistThumb>
                    </div>
                ))}
            </Carousel>
    </div >
    );
}