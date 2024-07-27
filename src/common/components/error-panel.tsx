type ErrorPanelProps = {
    errorMessage: string
}

const ErrorPanel = (props: ErrorPanelProps) => {
    return (
        <>
            {
                props.errorMessage && 
                <div className="text-center text-white px-4 bg-red-500 rounded-2xl mt-4 ">
                    <p className="">{props.errorMessage}</p>
                </div>
            }
        </>
    )
}

export default ErrorPanel;