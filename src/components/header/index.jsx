export default function Header(props) {
    return(
        <div className="w-full px-32 py-5 bg-primary text-white rounded-md">
            {props.children}
        </div>
    )
}