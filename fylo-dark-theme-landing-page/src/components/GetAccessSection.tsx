export default function GetAccessSection() {
  return (
    <section className="get-access-section-bg">
        <div className="text-white px-4 xsm:px-8 sm:px-12">
            <div className="bg-fe-dark-blue-1 text-center max-w-4xl rounded-lg shadow-lg px-20 py-12 mx-auto">
                <h2 className="font-raleway font-bold text-3xl mb-4">
                    Get early access today
                </h2>
                <p className="font-open-sans text-sm max-w-2xl mb-8">
                    It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
                <div className="flex flex-row justify-center flex-wrap gap-6">
                    <input type="text" placeholder="email@example.com" className="font-open-sans text-sm text-black focus:outline focus:outline-fe-cyan focus:outline-2 focus:-outline-offset-2 rounded-full flex-1 px-5 py-3"/>
                    <button className="button-hover-animation font-raleway font-bold text-sm rounded-full px-5 py-3">Get Started For Free</button>
                </div>
            </div>
        </div>
        <div className="h-1/2 pb-14"></div>
    </section>
  )
}
