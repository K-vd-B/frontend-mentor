export default function InfoSection() {
  return (
    <section className="bg-fe-dark-blue-2 flex flex-wrap gap-20 justify-center mx-auto px-4 xsm:px-8 sm:px-12 pt-20 pb-40">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 max-w-7xl">
            <img src="illustration-stay-productive.png" alt="An illustration that shows people collaborating from different places." />
            <div className="flex flex-col justify-center items-center lg:items-start text-white text-center lg:text-left flex-1 px-4 xsm:px-8 sm:px-12">
                <h2 className="font-raleway font-bold text-4xl max-w-xs mb-5 mt-10 lg:mt-0">
                    Stay productive, wherever you are
                </h2>
                <p className="font-open-sans max-w-[35rem] mb-3">
                    Never let location be an issue when accessing your files. Fylo has you covered for
                    all of your file storage needs.
                </p>
                <p className="font-open-sans max-w-[35rem] mb-4">
                    Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email attachments required.
                </p>
                <div className="flex flex-row justify-center items-center">
                    <a className="menu-hover-animation text-fe-cyan text-[1.1rem] py-1 mr-2 cursor-pointer">See how Fylo works</a>
                    <img src="icon-arrow.svg" alt="A arrow symbol." className="h-8 w-8"/>
                </div>
            </div>
        </div>
    </section>
  )
}
