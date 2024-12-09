import {Ubuntu_Mono} from "next/font/google";
import "./globals.css";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import React, {ReactNode} from "react";
import {locales} from "@/config";

const ubuntumono = Ubuntu_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ubuntu-mono",
});

// export const metadata: Metadata = {
//     title: "EUROSOC",
//     description: "Twoje cyberbezpieczeństwo oparte na szkoleniac",
//     icons: {
//         icon: "/assets/images/logo.svg",
//     },
// };

//static

interface Props {
    children: ReactNode;
    params: { locale: string };
}

export function generateStaticParams() {
    return locales.map(locale => ({locale}))
}

//dodajemy to do każdej page//

export async function generateMetadata({params: {locale}}: Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespaces: "layout"});


    return {
        title: t("title") ,
        description: t("description")
    };

}

export default async function RootLayout({children, params: {locale}}: Props) {
    setRequestLocale(locale);
    const messages = await getMessages({locale});

    return (
        <html lang={locale}>
        <body className={ubuntumono.variable}>
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}