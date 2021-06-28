export default function ImageCard({imageurl}){
    return <div className="image-area" style={{backgroundImage: `url(${imageurl})` }}></div>
}