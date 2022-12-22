//import { useContext } from 'react'
import GalleryItem from './GalleryItem.jsx'
//import { DataContext } from '../Context/DataContext.jsx'

const Gallery = (props) => {
    const data = props.data.result.read()

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}


export default Gallery
