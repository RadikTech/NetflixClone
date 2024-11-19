const CButton = ({ children, isLoggingIn, className, ...props }) => {
    return (
        <button
            className={`${className} py-2 bg-red-600 text-white font-semibold 
            rounded-md hover:bg-red-700`}
            {...props}>
            {
                children
            }
        </button>
    );
}

export default CButton;