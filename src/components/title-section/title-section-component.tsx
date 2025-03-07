interface TitleSectionProps {
    title: string
}

function TitleSection({ title }: TitleSectionProps ){
    return <h1 className="font-bold text-md sm:text-xl md:text-2xl lg:text-3xl" >{title}</h1>
}

export default TitleSection;