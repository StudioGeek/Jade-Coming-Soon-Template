import {DateTime} from "luxon";

export default function Counter({date} : {date: string}){
    const luxonDate = DateTime.fromFormat( date, 'yyyy-MM-dd');
    return <>
        <div className="counter flex justify-center my-10">
            <div className={'mx-2'}>
                <div className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    14
                </div>
                <div className={'text-sm mt-3 font-thin'}>
                    days
                </div>
            </div>
            <div className={'mx-2'}>
                <div
                    className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    23
                </div>
                <div className={'text-sm mt-3 font-thin'}>
                    hours
                </div>
            </div>
            <div className={'mx-2'}>
                <div
                    className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    23
                </div>
                <div className={'text-sm mt-3 font-thin'}>
                    minutes
                </div>
            </div>
            <div className={'mx-2'}>
                <div
                    className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    24
                </div>
                <div className={'text-sm mt-3 font-thin'}>
                    seconds
                </div>
            </div>
        </div>
    </>
}