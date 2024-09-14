import {DateTime} from "luxon";
import {useEffect, useState} from "react";

export default function Counter({date} : {date: string}){
    const luxonDate = DateTime.fromFormat( date, 'yyyy-MM-dd');
    const today = DateTime.now();
    let diff = luxonDate.diff(today, ['days','hours','minutes','seconds']);
    let [difference, setDifference] = useState(diff.toObject());

    useEffect(() => {
        const interval = setInterval(() => {
            const today = DateTime.now();
            setDifference(luxonDate.diff(today, ['days','hours','minutes','seconds']).toObject());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return <>
        <div className="counter flex justify-center my-10 z-10">
            <div className={'mx-2'}>
                <div className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    {difference.days ?? 0}
                </div>
                <div className={'lato-thin text-sm mt-3 font-thin'}>
                    days
                </div>
            </div>
            <div className={'mx-2'}>
                <div
                    className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    {difference.hours ?? 0}
                </div>
                <div className={'lato-thin text-sm mt-3 font-thin'}>
                    hours
                </div>
            </div>
            <div className={'mx-2'}>
                <div
                    className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    {difference.minutes ?? 0}
                </div>
                <div className={'lato-thin text-sm mt-3 font-thin'}>
                    minutes
                </div>
            </div>
            <div className={'mx-2'}>
                <div
                    className={'bg-semantic text-primary w-[60px] h-[60px] flex flex-col justify-center font-bold text-2xl rounded-sm'}>
                    {Math.round(difference.seconds!) ?? 0}
                </div>
                <div className={'lato-thin text-sm mt-3 font-thin'}>
                    seconds
                </div>
            </div>
        </div>
    </>
}