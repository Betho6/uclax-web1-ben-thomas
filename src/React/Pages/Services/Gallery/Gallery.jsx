import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import GalleryItem from './GalleryItem.jsx';

const Gallery = ({services, catChosen }) => {
    
    return (
        <GalleryStyled className='Gallery'>
            {
                services.packages
<<<<<<< HEAD
                .filter((item) =>{
                    return (catChosen === 'All' || item.category === catChosen)
                })
=======
                    .filter((item) =>{
                        console.log('item.category', item.category);
>>>>>>> e309e81769f75ed9e784a115d67101d6ec23038d

                        return (catChosen === 'All' || item.category === catChosen)
                    })
                    .map((item, idx) => {  
                        return <GalleryItem key={ idx } item= {item} />
                    })
            }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
    
`;