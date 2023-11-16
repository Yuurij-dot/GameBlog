
export function TodoModelDone (props) {
    return(
        <div className="w-full h-10 flex items-center cursor-pointer bg-green-400 rounded px-3 my-3">
            <span className=" font-bold text-white">{props.name}</span>
        </div>
    )
}

export function TodoModelNotDone (props) {
    return(
        <button onClick={props.onClick} className="w-full h-10 flex items-center cursor-pointer bg-red-400 rounded px-3 my-3">
            <span className=" font-bold text-white">{props.name}</span>
        </button>
    )

}