'use client'

import {usePathname, useRouter} from "@/navigation";
import {useParams} from "next/navigation";
import {ChangeEvent, ReactNode} from "react";
import {useTransition} from "react";

interface Props {
    children: ReactNode;
    defaultValue: string;
}

function LocaleSwitcherSelect({children,defaultValue} : Props) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [isPending, startTransition] = useTransition();

    function onSelectedChange(e : ChangeEvent<HTMLSelectElement>){
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(
                //@ts-ignore
                {pathname, params},
                {locale: nextLocale})
        })

    }

    return (
        <label className={`${isPending && 'opacity-0'} transition-opacity duration-300`}>
            <select className="rounded-xl w-[55px] px-1.5 bg-black text-white  h-7" defaultValue={defaultValue} disabled={isPending} onChange={onSelectedChange}>{children}</select>
        </label>
    );
}

export default LocaleSwitcherSelect;