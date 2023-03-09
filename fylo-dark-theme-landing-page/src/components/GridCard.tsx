export default function GridCard({imageURL, imageAlt, header, body}: {imageURL: string, imageAlt:string, header:string, body: string}) {
  return (
    <div className="flex flex-col items-center text-white">
        <img src={imageURL} alt={imageAlt} className="h-[5.5rem] w-auto"/>
        <h2 className="font-raleway font-bold text-lg mt-7">{header}</h2>
        <p className="font-open-sans text-center text-sm max-w-sm mt-2">{body}</p>
    </div>
  )
}
