export default function QuoteCard({text, personName, personRole, personAvatarURL}: 
                                 {text: string, personName: string, personRole: string, personAvatarURL: string}) {
  return (
    <div>
        <p>{text}</p>
        <div>
            <img src={personAvatarURL} alt={`A picture of ${personName}.`} />
            <div>
                <p>{personName}</p>
                <p>{personRole}</p>
            </div>
        </div>
    </div>
  )
}
