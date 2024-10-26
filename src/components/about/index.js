import React from "react";
import ItemLayout from "../ItemLayout";

const AboutDetails = () => {
  return (
    <div className="w-full max-w-auto xl:max-w-4xl mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
      <ItemLayout
        className={
          "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        }
      >
        <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          About Me
        </h2>
        <p className="font-light  text-xs sm:text-sm md:text-base   ">
          As a skilled full-stack software engineer with 3 years of experience,
          I specialize in frontend development, particularly with React. My
          multicultural background—having lived in multiple countries—gives me a
          unique perspective on cross-cultural collaboration, which I leverage
          in diverse team environments. Fluent in English, Korean, and
          business-level Japanese, I bring both technical expertise and
          adaptability to projects. My passion for continuous learning and
          emerging technologies drives me to stay ahead of industry trends and
          contribute effectively to global teams.
        </p>
        <p className="font-light  text-xs sm:text-sm md:text-base   ">
          3年の経験を持つフルスタックソフトウェアエンジニアとして、特にReactを使ったフロントエンド開発を専門としています。複数の国での生活経験があるため、多文化的な背景を活かし、クロスカルチャーのコラボレーションにおいて独自の視点を提供し、多様なチーム環境で効果的に貢献できます。英語と韓国語に加え、ビジネスレベルの日本語も話せるので、技術的な専門性と柔軟性を持ってプロジェクトに取り組むことができます。また、私は継続的な学習と新しい技術の探求に情熱を注いでおり、常に業界の最新トレンドを追いかけながら、グローバルなチームでの貢献を目指しています。
        </p>
      </ItemLayout>

      <ItemLayout
        className={
          "col-span-full lg:col-span-8 row-span-2 flex-col items-start text-accent"
        }
      >
        <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          3+ <sub className="font-semibold text-base">years of experience</sub>
        </p>
      </ItemLayout>
      <ItemLayout>
        <img
          className="w-full h-auto"
          src={`https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,nodejs,npm,yarn,figma,git,github,graphql,postgres,redux,vite,vscode,express,sequelize,jest,vitest,aws`}
          alt="Hannah"
          loading="lazy"
        />
      </ItemLayout>
    </div>
  );
};

export default AboutDetails;
