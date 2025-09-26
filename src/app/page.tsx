import { Avatar } from "@/components/common/avatar";
import { Button } from "@/components/common/button";
import { SocialLink, SocialLinkEnum } from "@/components/common/social-link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default async function Home() {
  const t = await getTranslations();

  return (
    <main
      className={twMerge(
        "flex flex-col max-w-147 mx-auto my-2 h-fit items-center"
      )}
    >
      <header className="flex flex-col py-6 items-center gap-2 w-fit">
        <Avatar />
        <h1 className="text-md text-primary">@juliasilva</h1>
      </header>

      <section>
        <ThemeSwitcher />
      </section>

      <section className="flex p-6 flex-col gap-4 w-full">
        <Button>{t("homePage.subscribe")}</Button>
        <Button>{t("homePage.downloadEbook")}</Button>
        <Button>{t("homePage.portfolio")}</Button>
        <Button>{t("homePage.course")}</Button>
      </section>

      <section className="flex p-6 gap-4 flex-row items-center">
        <SocialLink
          socialLink={SocialLinkEnum.GitHub}
          link="https://github.com/rocketseat-education"
        />
        <SocialLink
          socialLink={SocialLinkEnum.Instagram}
          link="https://www.instagram.com/rocketseat"
        />
        <SocialLink
          socialLink={SocialLinkEnum.Youtube}
          link="https://www.youtube.com/rocketseat"
        />
        <SocialLink
          socialLink={SocialLinkEnum.LinkedIn}
          link="https://br.linkedin.com/school/rocketseat"
        />
      </section>

      <footer role="contentinfo" className="text-sm text-primary p-6">
        {t.rich("footer.madeWithLove", {
          link: (chunks) => (
            <Link
              href="https://rocketseat.com.br"
              target="_blank"
              className="hover:underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </footer>
    </main>
  );
}
