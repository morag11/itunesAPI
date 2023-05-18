import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';

//returns list of searched media
//depending on what it's passed it either returns the search list or the favourites list
const SearchedList = (props) => {
    const [list, setList] = useState(props.allMedia)
    useEffect(() => {
        setList(props.allMedia)
    }, [props.allMedia])
    return (
        <div>
            {list.map((media) => (
                <Card className="Card" style={{ width: '18rem' }}>
                    <Card.Img className="CardImg" variant="top" src={media.artworkUrl100} alt='artwork' />
                    <Card.Body>
                        <Card.Title className="CardTitle">{media.trackCensoredName}</Card.Title>
                        <Card.Text className="CardText">{media.artistName}</Card.Text>
                        {/* if it's the search list then the icon adds card to favourites, if it's favourites then it removes it */}
                        <ion-icon name="heart-sharp" className="icon" size="large" onClick={() => props.handleFavouritesClick(media)}></ion-icon>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default SearchedList;