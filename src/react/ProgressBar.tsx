
export default function ProgressBar({percentage}: {percentage: number}){
    return <>
        <div className={'w-100 flex justify-center z-10'}>
            <div className="progress-bar my-3 w-[calc(100%-3rem)] rounded-md shadow-semantic">
                <div className="progress-bar-shadow bg-semantic/50 relative w-[100%] h-[2em] overflow-hidden rounded-sm flex ">
                    <div className={`inline-block text-primary h-[2em] bg-primary`} style={{width: `${percentage}%`}}></div>
                    <div className={`lato-bold absolute text-center top-0 w-[100%] mt-1 shadow-semantic text-white [text-shadow:_0_0_10px_rgb(0_0_0_/_40%)]`} >
                        {percentage}%
                    </div>
                </div>
            </div>
        </div>
    </>
}