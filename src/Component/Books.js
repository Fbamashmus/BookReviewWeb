import React from 'react';
import BookItem from './BookItem';
import './Books.css'

function Books(){
    return <div className='cards-list'>
    <BookItem
    img="https://m.media-amazon.com/images/I/41PoHyW5m6L._AC_SY580_.jpg" 
    author="Hermann Hesse" 
    rating="5.0"/>
    
    <BookItem
    img="https://www.xoeditions.com/wp-content/uploads/2011/01/FILLE-DE-PAPIER.jpg" 
    author="Guillaume Musso" 
    rating="4.9"/>
    
    <BookItem
    img="https://images-na.ssl-images-amazon.com/images/I/81IzbD2IiIL.jpg" 
    author="Khaled Hosseini" 
    rating="4.6"/>
</div>
}

export default Books;