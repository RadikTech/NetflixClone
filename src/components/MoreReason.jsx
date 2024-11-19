
const MoreReason = ({ title, desc, icon, className }) => {

    return (
        <div className={`${className} relative m-2 px-3 py-5 text-white rounded-[20px] bg-gradient-to-r from-[#192247] to-[#210e17]`}>
            <div className="text-2xl font-bold">
                {title}
            </div>

            <div className="text-gray-400 text-[14px] mt-2">
                {desc}
            </div>

            <div class="absolute bottom-0 right-0">
                <img src={icon} alt="Join Icon" height={60} width={60}
                    className="m-2 p-2" />
            </div>
        </div>
    );
}

export default MoreReason;