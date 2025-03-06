import { ReactElement } from "react"

interface CardCategoryProps {
    title: string;
    icon: ReactElement;
    className?: string;
}

function CardCategory({ title, icon, className }: CardCategoryProps){
    return (
        <div className={`${className} border rounded-[8px] border-black flex flex-col items-center justify-center gap-2 p-5`}>
            {icon}
            <h2 className="text-2xl" >{title}</h2>
        </div>
    )
}

export default CardCategory;