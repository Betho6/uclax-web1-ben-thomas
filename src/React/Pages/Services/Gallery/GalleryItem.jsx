import React, {useState} from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/

const GalleryItem = ({ item }) => {
    const [showLightbox, showLightboxUpdate] = useState (false)
        
    const handleOnHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);

    }

    const [showLightbox, showLightboxUpdate] = useState (false)
    
    const handleOnHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);

    }

    return (
        <GalleryItemStyled className='GalleryItem'>
        <div class='piece' onClick= { handleOnShow }>           
            <img src={ item.image } alt={item.title} />
            <h2>{ item.title } </h2> 
            <h3>{ item.category }</h3> 
        </div>


        <LightBox 
            show= { showLightbox }
            onHide={ handleOnHide }
        >
            <img src={ item.image } alt={item.title} />
            <h2>{ item.title } </h2> 
            <h3>{ item.category }</h3>  
        </LightBox>

            <GalleryItemStyled className='GalleryItem'>
            <div class='piece' onClick= { handleOnShow }>           
                <img src={ item.image } alt={item.title} />
                <h2>{ item.title } </h2> 
                <h3>{ item.category }</h3> 
            </div>


            <LightBox 
                show= { showLightbox }
                onHide={ handleOnHide }
            >
                <img src={ item.image } alt={item.title} />
                <h2>{ item.title } </h2> 
                <h3>{ item.category }</h3>  
            </LightBox>


            </GalleryItemStyled>
    );
}



export default GalleryItem;

const GalleryItemStyled = styled.div`
position: relative;
margin: 10px;

.piece{
    h2{
        position: absolute;
        bottom: 0px; left:0px; right: 0px;
        background-color: rgba(255, 255, 255, 0.462);
        margin: 0px;
        padding: 5px;
        text-align: right;
    }
<<<<<<< HEAD

h2{
    position: absolute;
    bottom: 0px; left:0px; right: 0px;
    background-color: rgba(255, 255, 255, 0.462);
    margin: 0px;
    padding: 5px;
    text-align: right;
}

h3 {
    position: absolute;
    top: 0px; left: 0px; right:0px;
    background-color: rgba(255, 255, 255, 0.462);
    margin: 0px;
    padding: 5px;
    text-align: right;
}

.Lightbox{
=======

    h3 {
        position: absolute;
        top: 0px; left: 0px; right:0px;
        background-color: rgba(255, 255, 255, 0.462);
        margin: 0px;
        padding: 5px;
        text-align: right;

    }
}
    .Lightbox{
>>>>>>> e309e81769f75ed9e784a115d67101d6ec23038d
        img{
            display:block;
            max-width:100%;
        
        }
    }
<<<<<<< HEAD
    
=======

    h2{
        background-color:maroon;
        color:white;
        padding: 10px;
        margin: 10px;
    }

>>>>>>> e309e81769f75ed9e784a115d67101d6ec23038d
`;