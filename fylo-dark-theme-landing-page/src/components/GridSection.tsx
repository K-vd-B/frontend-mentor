import GridCard from "./GridCard";

export default function GridSection() {
  return (
    <section>
        <GridCard imageURL="icon-access-anywhere.svg" imageAlt="A drawing of a computer and screen." 
        header="Access your files, anywhere" body="The ability to use a smartphone, tablet, or 
        computer to access your account means your files follow you everywhere."/>

        <GridCard imageURL="icon-security.svg" imageAlt="A drawing of a shield." 
        header="Security you can trust" body="2-factor authentication and user-controlled encryption 
        are just a couple of the security features we allow to help secure your files."/>

        <GridCard imageURL="icon-collaboration.svg" imageAlt="A drawing of a clock." 
        header="Real-time collaboration" body="Securely share files and folders with friends, family 
        and colleagues for live collaboration. No email attachments required."/>

        <GridCard imageURL="icon-any-file.svg" imageAlt="A drawing of a folder." 
        header="Store any type of file" body=" Whether you're sharing holidays photos or work 
        documents, Fylo has you covered allowing for all file types to be securely stored and 
        shared."/>
    </section>
  )
}
