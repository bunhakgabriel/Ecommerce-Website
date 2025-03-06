interface TagLabelTitleProps{
    title: string
}

function TagLabelTitle({ title }: TagLabelTitleProps){
    return (
        <div className="flex items-center gap-4 w-40" >
            <div className="w-5 h-9 bg-[#FF0000] rounded-sm" ></div>
            <h2 className="text-[#FF0000] font-medium" >{title}</h2>
        </div>
    )
}

export default TagLabelTitle;