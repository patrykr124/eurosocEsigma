import { locales } from "@/config";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Ubuntu } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const ubuntumono = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-ubuntu-mono",
});


interface Props {
    children: ReactNode;
    params: { locale: string };
}

export function generateStaticParams() {
    return locales.map(locale => ({ locale }))
}

//dodajemy to do każdej page//

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
    setRequestLocale(locale);
    const t = await getTranslations('layout');

    return {
        title: t('title'),
        description: t('description'),
        icons: {
            icon: "/assets/images/logo.png",
        },
    };
}


export default async function RootLayout({ children, params: { locale } }: Props) {
    setRequestLocale(locale)
    const messages = await getMessages({ locale });

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