import QuoteCard from './QuoteCard';

export default function QuotesSection() {
  return (
    <section className="bg-fe-dark-blue-2 text-white pb-52 px-4 xsm:px-8 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center max-w-7xl gap-10 mx-auto">

            <div className="relative">
                <img src="bg-quotes.png" alt="A quotation mark." className="absolute -top-8 -left-2"/>
                <QuoteCard text="Fylo has improved our team productivity by an order of magnitude. Since
                making the switch our team has become a well-oiled collaboration machine."
                personName="Satish Patel" personRole="Founder & CEO, Huddle"
                personAvatarURL="profile-1.jpg"/>
            </div>

            <QuoteCard text="Fylo has improved our team productivity by an order of magnitude. Since
            making the switch our team has become a well-oiled collaboration machine."
            personName="Bruce McKenzie" personRole="Founder & CEO, Huddle"
            personAvatarURL="profile-2.jpg"/>

            <QuoteCard text="Fylo has improved our team productivity by an order of magnitude. Since
            making the switch our team has become a well-oiled collaboration machine."
            personName="Iva Boyd" personRole="Founder & CEO, Huddle"
            personAvatarURL="profile-3.jpg"/>

        </div>
    </section>
  )
}
