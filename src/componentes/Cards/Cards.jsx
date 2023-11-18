import './Cards.css'

function Cards ({figure, cardTitle, cardText}){
    return(
        <>
            <div class="backgroundCard">
                <img src={figure} alt="illustrative figure" />
                <h3>{cardTitle}</h3>
                <p>{cardText}</p>
            </div>
        
        </>
    )
}

export default Cards