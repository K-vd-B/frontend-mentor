export default function QuoteCard({text, personName, personRole, personAvatarURL}: 
                                 {text: string, personName: string, personRole: string, personAvatarURL: string}) {
  return (
    <div className="relative flex flex-col bg-fe-dark-blue-4 max-w-sm rounded-lg shadow-xl px-8 pt-9 pb-6">
        <p className="font-open-sans text-[0.925rem]">{text}</p>
        <div className="flex flex-row items-center mt-5">
            <img src={personAvatarURL} alt={`A picture of ${personName}.`} className="rounded-full h-8 mr-3" />
            <div>
                <p className="font-raleway font-bold text-xs">{personName}</p>
                <p className="font-raleway text-xs">{personRole}</p>
            </div>
        </div>
    </div>
  )
}
