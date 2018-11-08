import React from 'react';
import Travel from './Travel';

const voyages = [
    {
        image: "https://res.cloudinary.com/dzgbfpr45/image/upload/c_scale,w_583/v1537791558/travel%20react/koh_dach.jpg",
        lieu: "Ile de Koh Dach",
        pays : "Cambodge"
    },
    {
        image: "https://res.cloudinary.com/dzgbfpr45/image/upload/v1537791558/travel%20react/free_tibet.jpg",
        lieu : "Lhassa",
        pays: "Tibet"
    },
    {
        image : "https://static.lexpress.fr/medias_11191/w_1887,h_1056,c_crop,x_0,y_443/w_640,h_360,c_fill,g_north/v1477034513/manhattan-4_5729899.jpg",
        lieu: "New York",
        pays: "Etats-Unis"
    },
    {
        image : "http://blog.bourse-des-vols.com/wp-content/uploads/2015/04/opera-house-sydney-australie.jpg",
        lieu: "Sydney",
        pays: "Australie"
    },
    {
        image : "https://www.safransdumonde.com/images/Safrans/Nos-creations/Destinations/Asie/Inde/Slide-how/Slide-how-inde-4.jpg",
        lieu: "Taj Mahal",
        pays: "Inde"
    }
]

const Voyages = () => (
    <div>
        {voyages.map(voyage => (
            <Travel image={voyage.image} lieu={voyage.lieu} pays={voyage.pays} />
        ))}
    </div>
);

export default Voyages;