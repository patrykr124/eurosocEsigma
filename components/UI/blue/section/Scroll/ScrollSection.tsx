"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "@/components/UI/sticky-scroll-reveal";

const content = [
    {
        title: "Ochrona prawna Zarządu",
        description:
            "zapewnia bezpieczeństwo w podejmowaniu strategicznych decyzji oraz minimalizuje ryzyko osobistej odpowiedzialności członków Zarządu. Dzięki wdrożeniu najskuteczniejszego rozwiązania i okresowym sprawozdaniom, Zarząd może sprawnie monitorować zgodność z obowiązującymi przepisami prawa, co pozwala na proaktywne reagowanie na potencjalne zagrożenia. W ten sposób wzmacnia się zarówno stabilność działalności firmy, jak i jej reputację w oczach interesariuszy.",
        content: (
            <div className="h-[550px] w-full flex items-center justify-center rounded-2xl overflow-hidden ">
                <Image
                    src="/assets/img/Ochrona_prawna.jpg"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"

                />
            </div>
        ),
    },
    {
        title: "Będziesz przygotowany",
        description:
            "Jeśli Twoja firma stanie się celem ataku hakerskiego, będziemy gotowi, aby zapewnić szybkie i skuteczne wsparcie. Nasz zespół ekspertów w dziedzinie cyberbezpieczeństwa pomoże zminimalizować szkody, zidentyfikować źródło ataku i wdrożyć niezbędne kroki naprawcze. Dzięki naszym zaawansowanym narzędziom i doświadczeniu, będziemy w stanie szybko przywrócić bezpieczeństwo Twojej firmy oraz chronić jej dane przed dalszymi zagrożeniami.",
        content: (
            <div className="h-[550px] w-full flex items-center justify-center rounded-2xl overflow-hidden ">
                <Image
                    src="/assets/img/przygotowanie.jpg"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"

                />
            </div>
        ),
    },
    {
        title: "Natychmiastowa reakcja",
        description:
            "Natychmiastowa reakcja na pojawiające się zagrożenia pozwala zredukować potencjalne straty i szybko przywrócić normalne funkcjonowanie firmy. Działając błyskawicznie, minimalizujemy ryzyko utraty danych i przerwania działalności, co chroni Twoją firmę przed długoterminowymi skutkami incydentów.",
        content: (
            <div className="h-[550px] w-full flex items-center justify-center rounded-2xl overflow-hidden ">
                <Image
                    src="/assets/img/natychmiastowa.jpg"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"

                />
            </div>
        ),
    },
    {
        title: "24/7/365 serviceSite",
        description:
            "zapewnia nieprzerwaną ochronę, niezależnie od pory dnia czy dnia tygodnia. Oznacza to, że Twoja firma jest chroniona również w weekendy i święta, gdy zagrożenia mogą pojawić się niespodziewanie. Dzięki stałemu nadzorowi jesteśmy w stanie szybko reagować na wszelkie nieprawidłowości, zanim staną się poważnym problemem.",
        content: (
            <div className="h-[550px] w-full flex items-center justify-center rounded-2xl overflow-hidden ">
                <Image
                    src="/assets/img/monitoring.jpg"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"

                />
            </div>
        ),
    },
    {
        title: "Monitorowanie systemu w czasie rzeczywistym",
        description:
            "pozwala na natychmiastowe wykrywanie prób włamań, zanim zdążą one wyrządzić poważne szkody. Dzięki temu możemy szybko zidentyfikować podejrzaną aktywność i podjąć odpowiednie działania zabezpieczające, co minimalizuje ryzyko utraty danych i przestojów w działalności firmy. Wczesne wykrycie zagrożeń daje przewagę w walce z cyberatakami.",
        content: (
            <div className="h-[550px] w-full flex items-center justify-center rounded-2xl overflow-hidden ">
                <Image
                    src="/assets/img/rzeczywistym.jpg"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    alt="linear board demo"

                />
            </div>
        ),
    },


];
export function ScrollSection() {
    return (
        <div className="">
            <StickyScroll content={content} />
        </div>
    );
}
