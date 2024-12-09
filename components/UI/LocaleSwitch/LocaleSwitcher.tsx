import {useLocale, useTranslations} from "use-intl";
import LocaleSwitcherSelect from "@/components/UI/LocaleSwitch/LocaleSwitcherSelect";
import {locales} from "@/config";

function LocaleSwitcher() {
    const locale = useLocale();
    const t = useTranslations("label");

    return (
        <LocaleSwitcherSelect defaultValue={locale}>
                {locales.map(e => (
                    <option  key={e} value={e}>
                        {t("locale", {"locale": e})}
                    </option>
                ))}
        </LocaleSwitcherSelect>
    );
}

export default LocaleSwitcher;