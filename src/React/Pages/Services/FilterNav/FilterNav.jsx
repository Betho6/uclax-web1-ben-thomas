import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FilterNavButton from './FilterNavButton.jsx'

const FilterNav = ({ services, catChosen, catChosenUpdate }) => {
<<<<<<< HEAD
=======

    console.log ('FilterNav services', services, catChosen);
>>>>>>> e309e81769f75ed9e784a115d67101d6ec23038d


    return (
        <FilterNavStyled className='FilterNav'>
<<<<<<< HEAD
{  
=======
        {  
>>>>>>> e309e81769f75ed9e784a115d67101d6ec23038d
            services.categories.map((category, idx) => {
                return <FilterNavButton
                            key= {idx} 
                            category={ category }
                            catChosen={ catChosen }
                            catChosenUpdate={ catChosenUpdate }
                        />
                })
        }
        </FilterNavStyled>
    );        
}

export default FilterNav;

const FilterNavStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
<<<<<<< HEAD
    
=======
>>>>>>> e309e81769f75ed9e784a115d67101d6ec23038d
`;