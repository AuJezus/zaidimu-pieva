import GameCard from "~/components/game-card";
import Heading from "~/components/heading";
import Section from "~/components/section";

function GamePage() {
  return (
    <Section>
      <Heading level="h1">Žaidimai</Heading>

      <p className="mb-6 max-w-screen-lg text-lg md:text-xl">
        Žaidimų Pieva siūlo įvairių lauko žaidimų nuomą - nuo mėtymo iki
        balansavimo, tinkamus tiek mažoms, tiek didelėms grupėms. Užsisakykite
        žaidimus iš anksto ir praleiskite neįprastą laisvalaikį su draugais ar
        šeima. Mūsų žaidimai suteiks jums daug džiaugsmo ir smagių akimirkų!
      </p>

      <div className="mx-auto grid max-w-72 gap-4 sm:max-w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {Array.from({ length: 15 }).map((_, i) => (
          <GameCard key={i} />
        ))}
      </div>
    </Section>
  );
}

export default GamePage;
