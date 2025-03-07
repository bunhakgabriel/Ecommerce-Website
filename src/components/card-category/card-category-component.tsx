import { ReactElement } from "react"

interface CardCategoryProps {
    title: string;
    icon: ReactElement;
    className?: string;
}

function CardCategory({ title, icon, className }: CardCategoryProps){
    return (
        <div className={`${className} border rounded-[2px] border-gray-400 flex flex-col items-center justify-center gap-2 p-3 sm:p-4 md:p-5`}>
            {icon}
            <h2 className="text-xs sm:text-lg md:text-2xl">{title}</h2>
        </div>
    )
}

export default CardCategory;