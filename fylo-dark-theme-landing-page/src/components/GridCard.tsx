export default function GridCard({imageURL, imageAlt, header, body}: {imageURL: string, imageAlt:string, header:string, body: string}) {
  return (
    <div>
        <img src={imageURL} alt={imageAlt}/>
        <h2>{header}</h2>
        <p>{body}</p>
    </div>
  )
}
