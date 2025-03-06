interface TitleSectionProps {
    title: string
}

function TitleSection({ title }: TitleSectionProps ){
    return <h1 className="font-bold text-[28px]" >{title}</h1>
}

export default TitleSection;