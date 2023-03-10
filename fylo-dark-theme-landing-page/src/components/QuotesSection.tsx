import QuoteCard from './QuoteCard';

export default function QuotesSection() {
  return (
    <div>
        <QuoteCard text="Fylo has improved our team productivity by an order of magnitude. Since 
        making the switch our team has become a well-oiled collaboration machine." 
        personName="Satish Patel" personRole="Founder & CEO, Huddle" 
        personAvatarURL="profile-1.jpg"/>

        <QuoteCard text="Fylo has improved our team productivity by an order of magnitude. Since 
        making the switch our team has become a well-oiled collaboration machine." 
        personName="Bruce McKenzie" personRole="Founder & CEO, Huddle" 
        personAvatarURL="profile-2.jpg"/>

        <QuoteCard text="Fylo has improved our team productivity by an order of magnitude. Since 
        making the switch our team has become a well-oiled collaboration machine." 
        personName="Iva Boyd" personRole="Founder & CEO, Huddle" 
        personAvatarURL="profile-3.jpg"/>
        
    </div>
  )
}
